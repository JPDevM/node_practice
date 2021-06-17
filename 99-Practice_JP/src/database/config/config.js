// .env
require('dotenv').config();

module.exports = {
  development: {
    username: 'root', // MySQL server user (by default it is root)
    password: '', // MySQL server password (by default it is empty)
    database: 'usersDB', // Name of the DB to connect.
    host: '127.0.0.1',
    dialect: 'mysql',
    define: {
      paranoid: true // soft deletes implementation (get all data that have NULL in deletedAt column)
    }
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
