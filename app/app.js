const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./coordinates/router'));
app.use('/', require('./users/router'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
