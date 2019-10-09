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

  const createSessionsSentence =
  'CREATE TABLE sessions (' +
  'session_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
  'user_id INT NOT NULL,'+
  'name VARCHAR(255),'+
  'start_date DATETIME DEFAULT CURRENT_TIMESTAMP,'+
  'end_date DATETIME,'+
  'FOREIGN KEY (user_id) REFERENCES users(user_id)'+
  ')';

  db.runSql(createSessionsSentence, function(err) {
    if (err) return callback(err);
    return callback();
  });

};

exports.down = function(db, callback) {
  db.dropTable('sessions',callback);
};

exports._meta = {
  "version": 1
};
