const { config } = require('dotenv');
const { resolve } = require('path');
const logger = require('./logger');

const { error } = config({
  path: resolve(`.env.${process.env.NODE_ENV}`),
  encoding: 'utf-8',
});

if (error) {
  logger.error('Error parsing envs', {
    stack: error.stack,
  });

  process.exit(-1);
}
