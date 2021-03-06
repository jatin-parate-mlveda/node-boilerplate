require('./loadEnv');
const http = require('http');
const logger = require('./logger');
const app = require('./app');
const { serverPort: port } = require('./constants');
const connectToDb = require('./connectToDb');

connectToDb()
  .then(() => {
    const server = http.createServer(app);
    server.listen(() => {
      logger.info(`App started on ${port}`);
    });
  })
  .catch((error) => {
    logger.error('Unhandled server error', {
      stack: error.stack,
    });
    process.exit(-1);
  });
