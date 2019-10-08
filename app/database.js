const util = require('util');
require('util.promisify').shim();
const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit: process.env.DB_CONECTION_POOL,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.');
    }
  }
  if (connection) connection.release();
});

// Promisify for Node.js async/await.
pool.query = util.promisify(pool.query);

module.exports = pool;
