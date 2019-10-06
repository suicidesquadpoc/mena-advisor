'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {

  const createUserConfirmationSentence =
  'CREATE TABLE user_confirmation (' +
  'user_id INT NOT NULL PRIMARY KEY,'+
  'confirmation_id VARCHAR(30) UNIQUE,'+
  'created_at DATETIME DEFAULT CURRENT_TIMESTAMP,'+
  'FOREIGN KEY (user_id) REFERENCES users(user_id)'+
  ')';

  db.runSql(createUserConfirmationSentence, function(err) {
    if (err) return callback(err);
    return callback();
  });

};

exports.down = function(db, callback) {
  db.dropTable('user_confirmation',callback);
};

exports._meta = {
  "version": 1
};
