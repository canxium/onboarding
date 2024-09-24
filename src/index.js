// make bluebird default Promise
require('module-alias/register');
const { pgClient } = require('@config/pg');
const { logger } = require('@config/logger');
const app = require('@config/express');
const {
  port, env
} = require('@config/constants');

(async () => {
  try {
    global.logger = logger;
    await pgClient.connect();
    global.pgClient = pgClient;

    // start api
    app.listen(port, () => logger.info(`Server started on port ${port} (${env})`));
  } catch (e) {
    logger.error(`Failed to init server ${e.message}`);
  }
})();
