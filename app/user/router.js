const userModel = require('./user-model');
const router = require('express').Router();

router.get('/user/create', function (req, res) {
  userModel.create({
    username: 'batu',
    password: 'batu',
    salt: 'batu',
    email: 'batu@gmail.com'
  }).then(function (err, userModel) {
    res.send(err);
  });
});

module.exports = router;
