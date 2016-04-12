// Login Controller

module.exports = function($scope, AuthService, LocalStorageService, $location){
  $scope.login = function(){
    console.log($scope.username, $scope.password);
    AuthService.login($scope.username, $scope.password)
      .then(userLoggedIn);
  }

  function userLoggedIn(result){
    LocalStorageService.set('token', result.token);

    $location.path('/dashboard');
  }
}
