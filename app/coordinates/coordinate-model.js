const pool = require('../database');
const mysql = require('mysql');

const selectAllCoordinates = async () => {
  let rows;
  try {
    rows = await pool.query('SELECT * FROM `coordinates`');
  } catch (e) {
    // handle errors
  }
  return rows;
};

const selectCoordinate = async (id) => {
  let rows;
  let sql = 'SELECT * FROM `coordinates` WHERE coordinate_id = ?';
  sql = mysql.format(sql, [id]);
  try {
    rows = await pool.query(sql);
  } catch (e) {
    // handle errors
  }
  return rows[0];
};

module.exports = {
  selectAllCoordinates,
  selectCoordinate
};
