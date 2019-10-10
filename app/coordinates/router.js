const coordinateModel = require('./coordinate-model');
const router = require('express').Router();
const { param, validationResult } = require('express-validator');

const getCoordinateValidations = [
  param('id').not().isEmpty().isInt().withMessage('expected an integer value')
];

const getCoordinate = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  } else {
    const coordinate = await coordinateModel.selectCoordinate(req.params.id);
    if (coordinate) {
      res.status(200).send(coordinate);
    } else {
      res.status(204).send(coordinate);
    }
  }
};

const postCoordinate = async (req, res) => {
  const coordinates = await coordinateModel.selectAllCoordinates();
  res.send(coordinates);
};

const getAllCoordinates = async (req, res) => {
  const coordinates = await coordinateModel.selectAllCoordinates();
  res.send(coordinates);
};

router.get('/coordinate/:id', getCoordinateValidations, getCoordinate);
router.post('/coordinate', postCoordinate);
router.get('/coordinates', getAllCoordinates);

module.exports = router;
