// Login Controller

module.exports = function($scope, AuthService, LocalStorageService, $location){
  $scope.login = function(form){
    console.log(form);
    AuthService.login(form.username, form.password)
      .then(userLoggedIn);
  }

  function userLoggedIn(result){
    LocalStorageService.set('token', result.token);

    $location.path('/dashboard');
  }
}
