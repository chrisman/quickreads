// usertoken.js
var Bookshelf = require('../bookshelf');
require('./token');
require('./user');

var Usertoken = Bookshelf.Model.extend({
  tableName: 'users_tokens',
  hasTimestamps: true,

  token: function(){
    return this.belongsTo('Token');
  },

  user: function(){
    return this.belongsTo('User');
  }
});

module.exports = Bookshelf.model('Usertoken', Usertoken);
