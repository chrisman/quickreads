// token.js
var Bookshelf = require('../bookshelf');
require('./user');
require('./usertoken');

var Token = Bookshelf.Model.extend({
  tableName: 'tokens',
  hasTimestamps: true,

  User: function(){
    return this.belongsTo('User').through('Usertoken');
  },

  Usertoken: function(){
    return this.belongsTo('Usertoken');
  }
});

module.exports = Bookshelf.model('Token', Token);
