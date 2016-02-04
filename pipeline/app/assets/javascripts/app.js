'use strict';

var pathwayApp = angular.module('pathwayApp', ['ui.router', 'templates']);

pathwayApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  //Default route
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'index.html',
    // templateUrl: '../app/assets/templates/index.html',
    controller: 'HomeController'
  })
});
