var express = require('express');
var router = express.Router();

var User = require('../db/models/user');

/* GET users listing. */
router.get('/', (req, res, next) => {
  User.fetchAll()
  .then( (u) => {
    res.json(u);
  })
})

router.get('/:id', function(req, res, next) {
  User.where({id: req.params.id}).fetch({
    withRelated: ['books']
  })
  .then( (user) => {
    res.json(user);
  });
});

module.exports = router;
