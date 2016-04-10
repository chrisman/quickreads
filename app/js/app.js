window.$ = window.jQuery = require('jquery')
require('bootstrap');
require('angular');
require('angular-ui-router');

var HomeController = require('./controllers/HomeController')
app.controller('HomeController', ['$scope', HomeController]);

var app = angular.module('quickreads', ['ui.router']);

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

app.run(['$state', function ($state) {}])

