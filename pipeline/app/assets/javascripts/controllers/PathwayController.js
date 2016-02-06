'use strict'

angular.module('pathwayApp')
.controller('PathwayController', function ($scope, $http, $stateParams) {
  $http({method: 'GET',
         url: '/api/pathways/' + $stateParams.id
  }).success(function(data, status){
    $scope.pathway = data
  })
});