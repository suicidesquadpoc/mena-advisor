var pool = require('../database');

async function selectAllCoordinates(){
  var rows;
  try{
    var rows = await pool.query('SELECT * FROM `coordinates`');
  } catch(e) {
    // handle errors
  }
  return rows;
}

exports.selectAllCoordinates = selectAllCoordinates;
