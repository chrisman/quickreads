// user.js
var Bookshelf = require('../bookshelf');
require('./book');
require('./token');
require('./usertoken');
require('./subscription');

var User = Bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,

  books: function(){
    return this.belongsToMany('Book').through('Subscription');
  },

  subscriptions: function(){
    return this.belongsToMany('Subscription');
  },

  tokens: function(){
    return this.belongsToMany('Token').through('Usertoken');
  },

  usertokens: function(){
    return this.belongsToMany('Usertoken');
  }
});

module.exports = Bookshelf.model('User', User);
