const fs = require('fs');
const path = require('path');
const winston = require('winston');

const defaultLogDir = path.join(__dirname, '..', 'logs');

function safeStringify(value) {
  return JSON.stringify(value, (key, val) =>
    typeof val === 'bigint' ? val.toString() : val
  );
}

function createPoolTickLogger(options = {}) {
  const filename =
    options.filename || path.join(defaultLogDir, 'poolTicks.log');
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  return winston.createLogger({
    level: 'info',
    format: winston.format.printf((info) => safeStringify(info.message)),
    transports: [
      new winston.transports.File({
        filename,
      }),
    ],
  });
}

module.exports = {
  createPoolTickLogger,
};
