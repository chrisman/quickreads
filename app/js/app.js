window.$ = window.jQuery = require('jquery')
require('bootstrap');
require('angular');
require('angular-ui-router');
var _ = require('lodash');
var fp = require('lodash/fp');
var ngRoute = require('angular-route');

var HomeController = require('./controllers/HomeController')

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

app.controller('HomeController', ['$scope', HomeController]);
