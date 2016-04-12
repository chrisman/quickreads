// Login Controller

module.exports = function($scope, AuthService, LocalStorageService, $location){
  $scope.login = function(){
    AuthService.login($scope.username, $scope.password).then(userLoggedIn);
  }

  function userLoggedIn(result){
    console.log(result);
    if (result.data.token) {
      LocalStorageService.set('token', result.data.token);
    }
    else if (result.data.err)
      LocalStorageService.del('token');

    $location.path('/dashboard');
  }
}
