require('angular');
var MainController = require('./controllers/MainController')

var app = angular.module('quickreads', []);
app.controller('MainController', ['$scope', MainController]);
