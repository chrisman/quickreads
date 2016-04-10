var config = require('../config');

app.service('AuthService', auth);

function auth($http){
  function login(username, password){
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
