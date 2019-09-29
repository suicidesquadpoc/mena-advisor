var coordinateModel = require('./coordinate-model');
var router = require('express').Router();

async function getAllCoordinates(req, res) {
  var coordinates = await coordinateModel.selectAllCoordinates();
  res.send(coordinates);
}

router.get('/coordinates',getAllCoordinates);

module.exports = router;
