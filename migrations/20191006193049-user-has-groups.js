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

  const createUserHasGroupsSentence =
  'CREATE TABLE user_has_groups (' +
  'user_id INT NOT NULL,'+
  'group_id INT NOT NULL,'+
  'role_id INT NOT NULL,'+
  'created_at DATETIME DEFAULT CURRENT_TIMESTAMP,'+
  'updates_at DATETIME ON UPDATE CURRENT_TIMESTAMP,'+
  'deleted_at DATETIME,'+
  'PRIMARY KEY (user_id, group_id),'+
  'FOREIGN KEY (user_id) REFERENCES users(user_id),'+
  'FOREIGN KEY (group_id) REFERENCES groups(group_id),'+
  'FOREIGN KEY (role_id) REFERENCES roles(role_id)'+
  ')';

  db.runSql(createUserHasGroupsSentence, function(err) {
    if (err) return callback(err);
    return callback();
  });

};

exports.down = function(db, callback) {
  db.dropTable('user_has_groups',callback);
};

exports._meta = {
  "version": 1
};
