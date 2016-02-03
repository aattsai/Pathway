'use strict';

var app = angular.module('app', ['ngResource', 'ngRoute'])
  .config(function($routeProvider, $locationProvider){
    $routeProvider.when('/user/login',
    {
      templateUrl: 'templates/login.html',
      controller: 'UserController'
    })
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true)
  });;
