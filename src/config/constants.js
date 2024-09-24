const path = require("path");
const env = process.env.NODE_ENV === "test" ? ".env.test" : ".env";
require("dotenv").config({
  path: path.join(__dirname, "../../" + env),
});

module.exports = Object.freeze({
  env                 : process.env.NODE_ENV || 'production',
  port                : process.env.PORT || 3001,
  logs                : process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  logLevels           : {
    file              : process.env.FILE_LOG_LEVEL || 'info',
    console           : process.env.CONSOLE_LOG_LEVEL || 'debug',
    sentry            : process.env.SENTRY_LOG_LEVEL || 'error'
  },
  pgUrl               : process.env.PG_URL,
});
