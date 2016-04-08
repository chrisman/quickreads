// subscription.js
var Bookshelf = require('../bookshelf');
require('./book');
require('./user');

var Subscription = Bookshelf.Model.extend({
  tableName: 'users_books',
  hasTimestamps: true,

  book: function(){
    return this.belongsTo('Book');
  },

  user: function(){
    return this.belongsTo('User');
  }
});

module.exports = Bookshelf.model('Subscription', Subscription);
