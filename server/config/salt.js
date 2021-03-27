const dotenv = require('dotenv').config().parsed;

module.exports = {
  encryption: dotenv.CRYPTO_KEY,
};
