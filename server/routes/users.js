require('dotenv').load();
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var mysecret = process.env.JWTSEC;
var jwtoptions = {};
var bcrypt = require('bcrypt');

var User = require('../db/models/user');

// AUTH //
router.post('/login', (req, res, next) => {
  User.where({
    uid: req.body.username,
  }).fetch().then( found => {
    if(!found) {
      res.json({"err": "user not found"});
    } else if(found) {
      if (bcrypt.compareSync(req.body.password, found.get('password'))) {
        var mypayload = found.get('id');
        jwt.sign(mypayload, mysecret, jwtoptions, (mytoken) => {
          res.json({"token": mytoken});
        });
      } else {
        res.json({"err": "wrong password"});
      }
    }
  });
});


////////////
// CREATE //
////////////

// create new user //
// TODO check for existing users
router.post('/', (req, res, next) => {
  new User({
    email: req.body.email,
    uid: req.body.uid,
    password: bcrypt.hashSync(req.body.password, 8)
  }).save().then( m => {
    console.log(m);
    res.json(m);
  });
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

////////////
// UPDATE //
////////////

// update user //

////////////
// DELETE //
////////////

// delete a user //

module.exports = router;
