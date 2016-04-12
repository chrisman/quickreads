window.$ = window.jQuery = require('jquery')
require('bootstrap');
require('angular');
require('angular-ui-router');

var app = angular.module('quickreads', ['ui.router']);
var HomeController = require('./controllers/HomeController')
var LoginController = require('./controllers/LoginController');
var AuthService = require('./services/authservice');
var LocalStorageService = require('./services/localstorageservice');

app.config([
  '$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('index', {
      url: "/",
      views: {
        "viewA": {
          templateUrl: "partials/home.html"
        }
      }
    })

    .state('about', {
      url: "/",
      views: {
        "viewA": {
          template: "We like books don't you?"
        }
      }
    })

}]);


app.controller('HomeController', ['$scope', HomeController]);
app.controller('LoginController', ['$scope', 'AuthService', 'LocalStorageService', '$location', LoginController]);
app.service('AuthService', ['$http', AuthService]);
app.service('LocalStorageService', [LocalStorageService]);

app.run(['$state', function ($state) {}])

