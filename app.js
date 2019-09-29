var express = require('express');
var pool = require('./database');

var app = express();

app.get('/coordinates', function (req, res) {
    pool.query('SELECT * FROM `coordinates`', function (error, results, fields) {
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
        res.send(results);
      });
  });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

module.exports = app;