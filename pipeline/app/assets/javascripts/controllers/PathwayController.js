'use strict'

angular.module('pathwayApp')
.controller('PathwayController', function ($scope, $http, $stateParams, $cookieStore, $state) {
  $scope.user = $cookieStore.get('pathway_user')
  $http({method: 'GET',
         url: '/api/pathways/' + $stateParams.id
  }).success(function(data, status){
    $scope.pathway = data
  })
  $scope.create = function() {
    $http({method: 'POST',
      url: '/api/pathways',
      data: {pathway: $scope.pathway, user: $scope.user.id } 
    }).success(function(data, status){
      console.log("hello from create() pathway")
      $state.go('showPathway', {'id': data.id })
    }).error(function(data){
      console.log(data)
    })
  }
});