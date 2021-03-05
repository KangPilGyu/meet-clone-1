const dotenv = require('dotenv').config().parsed;

module.exports = {
  username: dotenv.DB_USER,
  password: dotenv.DB_PASS,
  database: dotenv.DB_NAME,
  host: dotenv.DB_HOST,
  dialect: "mysql"
}