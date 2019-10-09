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

  const createCoordinatesSentence =
  'CREATE TABLE coordinates (' +
  'coordinate_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
  'longitude DECIMAL(10,6) SIGNED NOT NULL,'+
  'latitude DECIMAL(10,6) SIGNED NOT NULL,'+
  'time DATETIME NOT NULL,'+
  'elevation DECIMAL (7,2) SIGNED,'+
  'created_at DATETIME DEFAULT CURRENT_TIMESTAMP'+
  ')';

  db.runSql(createCoordinatesSentence, function(err) {
    if (err) return callback(err);
    return callback();
  });

};

exports.down = function(db, callback) {
  db.dropTable('coordinates',callback);
};

exports._meta = {
  "version": 1
};
