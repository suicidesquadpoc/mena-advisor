var express = require('express');
var pool = require('./database');

var app = express();

app.use('/', require('./coordinates/router'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

module.exports = app;
