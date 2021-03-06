const { resolve } = require('path');

/**
 * @type {import('pm2').StartOptions}
 */
const startOptions = {
  script: resolve('src', 'server.js'),
  name: 'node-app',
  exec_mode: 'cluster',
  instances: 'max',
};

module.exports = startOptions;
