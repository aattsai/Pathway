'use strict'

angular.module('pathwayApp')
.controller('HomeController', function ($scope, $http) {
  $http({method: 'GET',
         url: '/api/pathways'
  }).success(function(data, status){
    $scope.pathways = data
  })
});