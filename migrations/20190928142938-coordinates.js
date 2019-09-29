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
  db.createTable( 'coordinates', {
    coor_id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
      length:10,
      unsigned: true,
      notNull: true,
    },
    latitude: {
      type: 'decimal',
      length:'10,6',
      unsigned: true,
      notNull: true,
    },
    longitude: {
      type: 'decimal',
      length:'10,6',
      unsigned: true,
      notNull: true,
    }
  }, function(err) {
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
