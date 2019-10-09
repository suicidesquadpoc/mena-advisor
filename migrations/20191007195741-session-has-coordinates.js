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

  const createSessionHasCoordinatesSentence =
  'CREATE TABLE session_has_coordinates (' +
  'session_id INT NOT NULL,'+
  'coordinate_id INT NOT NULL,'+
  'PRIMARY KEY (session_id, coordinate_id),'+
  'FOREIGN KEY (session_id) REFERENCES sessions(session_id),'+
  'FOREIGN KEY (coordinate_id) REFERENCES coordinates(coordinate_id)'+
  ')';

  db.runSql(createSessionHasCoordinatesSentence, function(err) {
    if (err) return callback(err);
    return callback();
  });

};

exports.down = function(db, callback) {
  db.dropTable('session_has_coordinates',callback);
};

exports._meta = {
  "version": 1
};
