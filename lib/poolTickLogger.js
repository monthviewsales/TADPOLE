const fs = require('fs');
const path = require('path');
const winston = require('winston');

const logDir = path.join(__dirname, '..', 'logs');
fs.mkdirSync(logDir, { recursive: true });

function safeStringify(value) {
  return JSON.stringify(value, (key, val) =>
    typeof val === 'bigint' ? val.toString() : val
  );
}

function createPoolTickLogger() {
  return winston.createLogger({
    level: 'info',
    format: winston.format.printf((info) => safeStringify(info.message)),
    transports: [
      new winston.transports.File({
        filename: path.join(logDir, 'poolTicks.log'),
      }),
    ],
  });
}

module.exports = {
  createPoolTickLogger,
};
