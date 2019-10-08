// Sequelize include
var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = { sequelize, Sequelize };
