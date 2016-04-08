// book.js
var Bookshelf = require('../bookshelf');
require('./user');
require('./subscription');

var Book = Bookshelf.Model.extend({
  tableName: 'books',
  hasTimestamps: true,

  users: function(){
    return this.belongsToMany('User').through('Subscription');
  },

  subscriptions: function(){
    return this.belongsToMany('Subscription');
  }

});

module.exports = Bookshelf.model('Book', Book);
