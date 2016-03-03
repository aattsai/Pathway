'use strict'

angular.module('pathwayApp')
.controller('ProjectController', function ($scope, $http, $stateParams) {
  $http({method: 'GET',
         url: '/api/pathways/' + $stateParams.pathway_id + '/projects/' + $stateParams.id
  }).success(function(data, status){
    $scope.project = data
  })

  $scope.create = function() {
    debugger
    $http({method: 'POST',
      url: '/api/projects',
      data: {project: $scope.project } 
    }).success(function(data, status){
      console.log("hello from create()")
      $state.go('home')
    }).error(function(data){
      console.log(data)
    })
  }
});