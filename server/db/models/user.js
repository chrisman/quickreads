// user.js
var Bookshelf = require('../bookshelf');
require('./book');
require('./subscription');

var User = Bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,

  books: function(){
    //return this.belongsToMany('Book', 'users_books', 'user_id', 'book_id')
    return this.belongsToMany('Book').through('Subscription');
  },

  subscriptions: function(){
    return this.belongsToMany('Subscription');
  }
});

module.exports = Bookshelf.model('User', User);
