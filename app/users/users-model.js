const pool = require('../database');
const mysql = require('mysql');

const insertUser = async (user) => {
  let sql = 'INSERT INTO USERS (username, email, password, salt) VALUES ( ?, ?, ?, ? )';
  let insertId;
  sql = mysql.format(sql, [user.username, user.email, user.password, user.salt]);
  try {
    const result = await pool.query(sql);
    console.log(result);
  } catch (e) {
    // TODO: handle error
  }
  return insertId;
};

module.exports = {
  insertUser
};
