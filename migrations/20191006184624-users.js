'use strict';

let dbm;
let type;
let seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  const createUsersSentence =
  'CREATE TABLE users (' +
  'user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,' +
  'username VARCHAR(255),' +
  'email VARCHAR(255) NOT NULL,' +
  'password VARCHAR(64) NOT NULL,' +
  'salt VARCHAR(20) NOT NULL,' +
  'confirmed TINYINT(1) NOT NULL DEFAULT 0,' +
  'last_login DATETIME,' +
  'active TINYINT(1) NOT NULL DEFAULT 1,' +
  'created_at DATETIME DEFAULT CURRENT_TIMESTAMP,' +
  'updates_at DATETIME ON UPDATE CURRENT_TIMESTAMP,' +
  'deleted_at DATETIME,' +
  'CONSTRAINT USER_PASSWORD_CK CHECK (LENGTHB(password) = 64)' +
  ')';

  db.runSql(createUsersSentence, function (err) {
    if (err) return callback(err);
    return callback();
  });
};

exports.down = function (db, callback) {
  db.dropTable('users', callback);
};

exports._meta = {
  version: 1
};
