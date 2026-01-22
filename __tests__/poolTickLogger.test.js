const fs = require('fs');
const path = require('path');
const os = require('os');
const { createPoolTickLogger } = require('../lib/poolTickLogger');

describe('poolTickLogger', () => {
  test('writes JSON lines to logs/poolTicks.log', async () => {
    const logPath = path.join(
      os.tmpdir(),
      `poolTicks-${Date.now()}-${Math.random().toString(16).slice(2)}.log`
    );
    const logger = createPoolTickLogger({ filename: logPath });
    const before = fs.existsSync(logPath) ? fs.readFileSync(logPath, 'utf8') : '';

    logger.info({ foo: 'bar', slot: 1n });

    await new Promise((resolve) => setTimeout(resolve, 50));

    const after = fs.readFileSync(logPath, 'utf8');
    expect(after.length).toBeGreaterThan(before.length);

    const lastLine = after.trim().split('\n').pop();
    const parsed = JSON.parse(lastLine);
    expect(parsed.foo).toBe('bar');
    expect(parsed.slot).toBe('1');
  });
});
