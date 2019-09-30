const coordinateModel = require('./coordinate-model');
const router = require('express').Router();

const getAllCoordinates = async (req, res) => {
  const coordinates = await coordinateModel.selectAllCoordinates();
  res.send(coordinates);
};

router.get('/coordinates', getAllCoordinates);

module.exports = router;
