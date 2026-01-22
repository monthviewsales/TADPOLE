const DEFAULT_MIN_QUOTE_SOL = 35;
const STALE_MS = 12_000;
const COOLDOWN_MS = 45_000;

function formatNumber(value, decimals = 2) {
  if (!Number.isFinite(value)) return 'null';
  const fixed = value.toFixed(decimals);
  return fixed.replace(/\.?0+$/, '');
}

function formatSigned(value, decimals = 2) {
  if (!Number.isFinite(value)) return 'null';
  const sign = value > 0 ? '+' : value < 0 ? '-' : '';
  return `${sign}${formatNumber(Math.abs(value), decimals)}`;
}

function computeThresholds(quoteReserveUi) {
  if (!Number.isFinite(quoteReserveUi)) {
    return { impulse10: 0.25, trend60: 0.5 };
  }
  return {
    impulse10: Math.max(0.25, 0.003 * quoteReserveUi),
    trend60: Math.max(0.5, 0.005 * quoteReserveUi),
  };
}

function normalizeReasons(reasons, state) {
  const normalized = reasons.filter(Boolean);
  if (normalized.length < 2) {
    normalized.push(`state=${state}`);
  }
  if (normalized.length < 2) {
    normalized.push('rule=default');
  }
  if (normalized.length > 5) {
    return normalized.slice(0, 5);
  }
  return normalized;
}

function createPoolStateMachine(config = {}) {
  const minQuoteSol = Number.isFinite(config.minQuoteSol)
    ? config.minQuoteSol
    : DEFAULT_MIN_QUOTE_SOL;
  const stateByPool = new Map();

  function evaluateTick(tick) {
    const poolId = tick && tick.poolId ? String(tick.poolId) : '';
    const entry = stateByPool.get(poolId) || {
      lastState: null,
      lastDir: null,
      lastImpulseTsMs: null,
      cooldownUntilTsMs: null,
      confirmCount: 0,
    };

    const quoteReserveUi = tick ? tick.quoteReserveUi : null;
    const stalenessMs = tick ? tick.stalenessMs : null;
    const metrics = tick ? tick.metrics : null;
    const tsMs = tick ? tick.tsMs : null;

    const finalize = ({
      state,
      dir,
      reasons,
      confirmCount,
      cooldownUntilTsMs,
      lastImpulseTsMs,
    }) => {
      entry.lastState = state;
      entry.lastDir = dir;
      entry.confirmCount = Number.isFinite(confirmCount) ? confirmCount : 0;
      if (cooldownUntilTsMs !== undefined) {
        entry.cooldownUntilTsMs = cooldownUntilTsMs;
      }
      if (lastImpulseTsMs !== undefined) {
        entry.lastImpulseTsMs = lastImpulseTsMs;
      }
      stateByPool.set(poolId, entry);
      return {
        state,
        dir,
        reasons: normalizeReasons(reasons, state),
      };
    };

    if (Number.isFinite(quoteReserveUi) && quoteReserveUi < minQuoteSol) {
      return finalize({
        state: 'THIN_OR_STALE',
        dir: null,
        reasons: [
          'gate=minQuote',
          `quoteReserveUi=${formatNumber(quoteReserveUi)} < minQuote=${formatNumber(
            minQuoteSol
          )}`,
        ],
        confirmCount: 0,
      });
    }

    if (Number.isFinite(stalenessMs) && stalenessMs > STALE_MS) {
      return finalize({
        state: 'THIN_OR_STALE',
        dir: null,
        reasons: ['gate=stale', `stalenessMs=${Math.round(stalenessMs)} > ${STALE_MS}`],
        confirmCount: 0,
      });
    }

    const net10 = metrics ? metrics.netQuoteFlow_10s : null;
    if (net10 === null || net10 === undefined) {
      return finalize({
        state: 'IDLE',
        dir: null,
        reasons: ['warmup:netQuoteFlow_10s=null', 'gate=warmup'],
        confirmCount: 0,
      });
    }

    if (!Number.isFinite(tsMs)) {
      return finalize({
        state: 'IDLE',
        dir: null,
        reasons: ['missing:tsMs', 'cooldown=skipped'],
        confirmCount: 0,
      });
    }

    if (Number.isFinite(entry.cooldownUntilTsMs) && tsMs < entry.cooldownUntilTsMs) {
      return finalize({
        state: 'FAILED',
        dir: null,
        reasons: [
          'cooldown',
          `cooldownUntil=${Math.round(entry.cooldownUntilTsMs)}`,
        ],
        confirmCount: 0,
      });
    }

    const { impulse10, trend60 } = computeThresholds(quoteReserveUi);
    const net60 = metrics ? metrics.netQuoteFlow_60s : null;
    const net300 = metrics ? metrics.netQuoteFlow_300s : null;

    let state = 'IDLE';
    let dir = null;
    let confirmCount = 0;
    let reasons = [];

    const isImpulse = Math.abs(net10) >= impulse10;
    if (isImpulse) {
      dir = net10 > 0 ? 'UP' : 'DOWN';
      confirmCount =
        entry.lastState === 'IMPULSE' && entry.lastDir === dir
          ? entry.confirmCount + 1
          : 1;
      state = 'IMPULSE';

      const confirmOk =
        confirmCount >= 2 &&
        Number.isFinite(net60) &&
        (dir === 'UP' ? net60 > -(trend60 / 2) : net60 < trend60 / 2);
      if (confirmOk) {
        state = 'CONFIRMING';
      }

      if (state === 'CONFIRMING' && Number.isFinite(net60)) {
        const trendOk = dir === 'UP' ? net60 >= trend60 : net60 <= -trend60;
        if (trendOk) {
          let trend300Ok = true;
          if (Number.isFinite(net300)) {
            trend300Ok = dir === 'UP' ? net300 > 0 : net300 < 0;
          }
          if (trend300Ok) {
            state = 'TRENDING';
          }
        }
      }
    }

    const lastDir = entry.lastDir;
    const lastState = entry.lastState;
    if (
      (lastState === 'IMPULSE' || lastState === 'CONFIRMING') &&
      (lastDir === 'UP' || lastDir === 'DOWN') &&
      Number.isFinite(net10) &&
      Number.isFinite(net60)
    ) {
      const flippedUp = lastDir === 'UP' && net10 < 0 && net60 <= 0;
      const flippedDown = lastDir === 'DOWN' && net10 > 0 && net60 >= 0;
      if (flippedUp || flippedDown) {
        const cooldownUntil = tsMs + COOLDOWN_MS;
        return finalize({
          state: 'FAILED',
          dir: null,
          reasons: [
            'failed=flip',
            `net10s=${formatSigned(net10)} net60s=${formatSigned(net60)}`,
            `cooldownUntil=${Math.round(cooldownUntil)}`,
          ],
          confirmCount: 0,
          cooldownUntilTsMs: cooldownUntil,
        });
      }
    }

    if (state === 'IDLE') {
      reasons = [
        'idle',
        `impulse10=${formatNumber(impulse10)} net10s=${formatSigned(net10)}`,
        `trend60=${formatNumber(trend60)} net60s=${formatSigned(net60)}`,
      ];
    } else if (state === 'IMPULSE') {
      reasons = [
        `impulse10=${formatNumber(impulse10)} net10s=${formatSigned(net10)}`,
        `trend60=${formatNumber(trend60)} net60s=${formatSigned(net60)}`,
      ];
    } else if (state === 'CONFIRMING') {
      reasons = [
        `impulse10=${formatNumber(impulse10)} net10s=${formatSigned(net10)}`,
        `confirmCount=${confirmCount}`,
        `trend60=${formatNumber(trend60)} net60s=${formatSigned(net60)}`,
      ];
    } else if (state === 'TRENDING') {
      reasons = [
        `trend60=${formatNumber(trend60)} net60s=${formatSigned(net60)}`,
        `confirmCount=${confirmCount}`,
        `impulse10=${formatNumber(impulse10)} net10s=${formatSigned(net10)}`,
      ];
      if (Number.isFinite(net300)) {
        reasons.push(`net300s=${formatSigned(net300)}`);
      }
    }

    return finalize({
      state,
      dir,
      reasons,
      confirmCount,
      lastImpulseTsMs:
        state === 'IMPULSE' || state === 'CONFIRMING' || state === 'TRENDING'
          ? tsMs
          : undefined,
    });
  }

  return {
    evaluateTick,
  };
}

module.exports = {
  createPoolStateMachine,
};
