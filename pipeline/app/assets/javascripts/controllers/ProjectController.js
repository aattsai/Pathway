'use strict'

angular.module('pathwayApp')
.controller('ProjectController', function ($scope, $http, $stateParams) {
  debugger
  $http({method: 'GET',
         url: '/api/pathways/' + $stateParams.pathway_id + '/projects/' + $stateParams.id
  }).success(function(data, status){
    $scope.project = data
  })
});