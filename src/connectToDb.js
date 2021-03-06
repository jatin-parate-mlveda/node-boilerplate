const { connect } = require('mongoose');
const { dbUrl } = require('./constants');
const logger = require('./logger');

const connectToDb = async () => {
  try {
    await connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    logger.error('Error connecting to db', {
      stack: error.stack,
    });

    process.exit(-1);
  }
};

module.exports = connectToDb;
