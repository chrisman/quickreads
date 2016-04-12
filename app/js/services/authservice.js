// authservice
var config = require('../config');

module.exports = function($http){
  function login(username, password){
  console.log(`IN AUTHSERVICE:: username = ${username}, password = ${password}`);
    return $http({
      method: 'POST',
      url: `${config.apiurl}/users/login`,
      data: {
        username: username,
        password: password
      }
    });
  }

  return {
    login: login
  };
}
