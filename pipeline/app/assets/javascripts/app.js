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
  .state('discover', {
    url: '/discover',
    templateUrl: 'discover.html',
    controller: 'HomeController'
  })
  .state('showPathway', {
    url: '/pathway/:id',
    templateUrl: 'pathway.html',
    controller: 'PathwayController'
  })
  .state('showProject', {
    url: '/pathway/:pathway_id/project/:id',
    templateUrl: 'project.html',
    controller: 'ProjectController'
  })
});
