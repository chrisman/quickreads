var express = require('express');
var router = express.Router();

var User = require('../db/models/user');

// AUTH //
router.post('/login', (req, res, next) => {
  console.log("LOGGING IN");
  res.json({"status": "ok"});
});

//////////
// READ //
//////////

// read all //
router.get('/', (req, res, next) => {
  User.fetchAll()
  .then( (u) => {
    res.json(u);
  })
});

// read one //
router.get('/:id', function(req, res, next) {
  User.where({id: req.params.id}).fetch({
    withRelated: ['books']
  })
  .then( (user) => {
    res.json(user);
  });
});

module.exports = router;
