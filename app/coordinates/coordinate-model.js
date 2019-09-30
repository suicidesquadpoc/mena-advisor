const pool = require('../database');

const selectAllCoordinates = async () => {
  let rows;
  try {
    rows = await pool.query('SELECT * FROM `coordinates`');
  } catch (e) {
    // handle errors
  }
  return rows;
};

module.exports = selectAllCoordinates;
