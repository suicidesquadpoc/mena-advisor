const pool = require('../database');
const mysql = require('mysql');

const selectAllCoordinates = async () => {
  let result;
  try {
    result = await pool.query('SELECT * FROM `coordinates`');
  } catch (e) {
    // TODO: handle errors
  }
  return result;
};

const selectCoordinate = async (id) => {
  let result;
  let sql = 'SELECT * FROM `coordinates` WHERE coordinate_id = ?';
  sql = mysql.format(sql, [id]);
  try {
    result = await pool.query(sql);
  } catch (e) {
    // TODO: handle errors
  }
  return result[0];
};

module.exports = {
  selectAllCoordinates,
  selectCoordinate
};
