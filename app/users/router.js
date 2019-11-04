const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const userModel = require('./users-model');

const postUsersValidations = [
  body('username').not().isEmpty().isAlphanumeric().isLength({ min: 8, max: 255 }),
  body('email').not().isEmpty().isEmail(),
  body('emailCheck').not().isEmpty().isEmail().custom((value, { req, loc, path }) => {
    if (value !== req.body.email) {
      throw new Error('Email don\'t match');
    } else {
      return value;
    }
  }),
  body('password').not().isEmpty(),
  body('passwordCheck').not().isEmpty().custom((value, { req, loc, path }) => {
    if (value !== req.body.password) {
      throw new Error('Password don\'t match');
    } else {
      return value;
    }
  })
];

const postUsers = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  } else {
    const response = await userModel.insertUser(req.body);
    if (response) {
      // TODO send verification email
      res.status(200).send();
    } else {
      // TODO error handling during register
    }
  }
};

router.post('/users', postUsersValidations, postUsers);

module.exports = router;
