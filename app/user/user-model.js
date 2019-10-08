const database = require('../sequelize');

var Users = database.sequelize.define('Users', {
  user_id: {
    type: database.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: database.Sequelize.STRING,
  password: database.Sequelize.STRING,
  email: database.Sequelize.STRING,
  salt: database.Sequelize.STRING
}, {
  tableName: 'users',
  timestamps: false
});

module.exports = Users;
