const fs = require('fs');
const path = require('path');
const winston = require('winston');

const logDir = path.join(__dirname, '..', 'logs');
fs.mkdirSync(logDir, { recursive: true });

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
  production: 2,
  test: 1,
  development: 7,
};

const rawLevel = process.env.NODE_ENV || 'info';
const level = Object.prototype.hasOwnProperty.call(levels, rawLevel)
  ? rawLevel
  : 'info';

const logger = winston.createLogger({
  levels,
  level,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.printf((info) => {
      const { timestamp, level, message, ...rest } = info;
      const safeStringify = (value) => {
        try {
          return JSON.stringify(value, (key, val) =>
            typeof val === 'bigint' ? val.toString() : val
          );
        } catch (err) {
          return '"[unserializable]"';
        }
      };
      const meta = Object.keys(rest).length ? ` ${safeStringify(rest)}` : '';
      return `${timestamp} ${level}: ${message}${meta}`;
    })
  ),
  transports: [
    new winston.transports.File({ filename: path.join(logDir, 'app.log') }),
  ],
});

module.exports = logger;
