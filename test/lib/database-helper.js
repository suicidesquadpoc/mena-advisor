/* eslint-disable no-template-curly-in-string */
const db = require('../../app/database');

const clear = async (table) => {
  let result;
  try {
    result = await db.query(`DELETE FROM ${table}`);
  } catch (e) {
    console.error(e);
  }
  return result;
};

const save = async (table, coordinate) => {
  let result;
  try {
    // TODO: customizable columns
    result = await db.query(`INSERT INTO ${table} (latitude, longitude, time) VALUES (${coordinate.latitude}, ${coordinate.longitude}, NOW())`);
  } catch (e) {
    console.error(e);
  }
  return result;
};

module.exports = {
  clear,
  save
};
