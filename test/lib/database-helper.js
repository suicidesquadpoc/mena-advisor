/* eslint-disable no-template-curly-in-string */
const db = require('../../app/database');
const _ = require('lodash');

const clear = async (tableName) => {
  try {
    return db.query(`DELETE FROM ${tableName}`);
  } catch (e) {
    console.error(e);
  }
};

const save = async (tableName, entity) => {
  try {
    return db.query(`INSERT INTO ${tableName} (${setColumns(entity)}) VALUES (${setValues(entity)})`);
  } catch (e) {
    console.error(e);
  }
};

const setColumns = (entity) => {
  return _.join(Object.keys(entity), ', ');
};

const setValues = (entity) => {
  return _.join(Object.values(entity), ', ');
};

module.exports = {
  clear,
  save
};
