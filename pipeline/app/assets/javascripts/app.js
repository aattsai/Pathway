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
    controller: 'HomeController'
  })
  .state('logout', {
    url: '/',
    controller: 'UserController'
  })
  .state('login', {
    url: '/user/login',
    templateUrl: 'login.html',
    controller: 'UserController'
  })
  .state('register', {
    url: '/user/new',
    templateUrl: 'register.html',
    controller: 'UserController'
  })
  .state('showPathway', {
    url: '/api/pathway/:id',
    templateUrl: 'pathway.html'
  })
});
