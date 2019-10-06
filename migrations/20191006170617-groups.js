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

  const createGroupsSentence =
  'CREATE TABLE groups (' +
  'group_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
  'name VARCHAR(255),'+
  'status TINYINT(1) DEFAULT 1,'+
  'created_at DATETIME DEFAULT CURRENT_TIMESTAMP,'+
  'updates_at DATETIME ON UPDATE CURRENT_TIMESTAMP,'+
  'deleted_at DATETIME'+
  ')';

  db.runSql(createGroupsSentence, function(err) {
    if (err) return callback(err);
    return callback();
  });

};

exports.down = function(db, callback) {
  db.dropTable('groups',callback);
};

exports._meta = {
  "version": 1
};
