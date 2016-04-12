// Login Controller

module.exports = function($scope, AuthService, LocalStorageService, $location){
  $scope.login = function(){
    console.log('LOGIN CONTROLLER :: ', $scope.username, $scope.password);
    AuthService.login($scope.username, $scope.password).then(userLoggedIn);
  }

  function userLoggedIn(result){
    console.log(`USER LOGGED IN && result = ${JSON.stringify(result)}`);
    LocalStorageService.set('token', result.data.token);

    $location.path('/dashboard');
  }
}
