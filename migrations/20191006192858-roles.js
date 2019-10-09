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

  const createRolesSentence =
  'CREATE TABLE roles (' +
  'role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
  'description VARCHAR(255) NOT NULL,'+
  'active TINYINT(1) NOT NULL DEFAULT 1,'+
  'created_at DATETIME DEFAULT CURRENT_TIMESTAMP,'+
  'updates_at DATETIME ON UPDATE CURRENT_TIMESTAMP,'+
  'deleted_at DATETIME'+
  ')';

  db.runSql(createRolesSentence, function(err) {
    if (err) return callback(err);
    return callback();
  });

};

exports.down = function(db, callback) {
  db.dropTable('roles',callback);
};

exports._meta = {
  "version": 1
};
