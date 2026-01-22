const { createPoolStateMachine } = require('../lib/poolStateMachine');

function makeTick({
  poolId = 'pool',
  quoteReserveUi = 100,
  stalenessMs = 0,
  tsMs = 0,
  net10,
  net60,
  net300 = null,
} = {}) {
  return {
    poolId,
    quoteReserveUi,
    stalenessMs,
    tsMs,
    metrics: {
      netQuoteFlow_10s: net10,
      netQuoteFlow_60s: net60,
      netQuoteFlow_300s: net300,
      flowVol_10s: null,
      flowVol_60s: null,
      depthScore: null,
    },
  };
}

describe('poolStateMachine', () => {
  test('min quote gate triggers THIN_OR_STALE', () => {
    const machine = createPoolStateMachine({ minQuoteSol: 35 });
    const result = machine.evaluateTick(
      makeTick({ quoteReserveUi: 10, tsMs: 1000, net10: 1, net60: 0 })
    );

    expect(result.state).toBe('THIN_OR_STALE');
    expect(result.dir).toBeNull();
    expect(result.reasons.join(' ')).toMatch(/minQuote/);
  });

  test('impulse confirms after two consecutive impulses', () => {
    const machine = createPoolStateMachine({ minQuoteSol: 35 });
    const first = machine.evaluateTick(
      makeTick({ tsMs: 1000, net10: 1, net60: 0.1 })
    );
    const second = machine.evaluateTick(
      makeTick({ tsMs: 2000, net10: 1.2, net60: 0.1 })
    );

    expect(first.state).toBe('IMPULSE');
    expect(first.dir).toBe('UP');
    expect(second.state).toBe('CONFIRMING');
    expect(second.dir).toBe('UP');
  });

  test('cooldown clamps state after failed flip', () => {
    const machine = createPoolStateMachine({ minQuoteSol: 35 });
    const impulse = machine.evaluateTick(
      makeTick({ tsMs: 1000, net10: 1.1, net60: 0.2 })
    );
    const failed = machine.evaluateTick(
      makeTick({ tsMs: 2000, net10: -0.5, net60: -0.1 })
    );
    const cooldown = machine.evaluateTick(
      makeTick({ tsMs: 3000, net10: 1.1, net60: 0.2 })
    );

    expect(impulse.state).toBe('IMPULSE');
    expect(failed.state).toBe('FAILED');
    expect(failed.reasons.join(' ')).toMatch(/cooldownUntil/);
    expect(cooldown.state).toBe('FAILED');
    expect(cooldown.reasons.join(' ')).toMatch(/cooldown/);
  });

  test('warmup (net10 null) returns IDLE even during cooldown', () => {
    const machine = createPoolStateMachine({ minQuoteSol: 35 });
    machine.evaluateTick(makeTick({ tsMs: 1000, net10: 1.1, net60: 0.2 }));
    machine.evaluateTick(makeTick({ tsMs: 2000, net10: -0.5, net60: -0.1 }));

    const warmup = machine.evaluateTick(
      makeTick({ tsMs: 3000, net10: null, net60: null })
    );

    expect(warmup.state).toBe('IDLE');
    expect(warmup.reasons.join(' ')).toMatch(/warmup/);
  });

  test('missing tsMs returns IDLE and skips cooldown logic', () => {
    const machine = createPoolStateMachine({ minQuoteSol: 35 });
    const result = machine.evaluateTick(
      makeTick({ tsMs: null, net10: 1.2, net60: 0.3 })
    );

    expect(result.state).toBe('IDLE');
    expect(result.reasons.join(' ')).toMatch(/missing:tsMs/);
  });
});
