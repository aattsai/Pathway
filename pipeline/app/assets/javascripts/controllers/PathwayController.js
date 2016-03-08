'use strict'

angular.module('pathwayApp')
.controller('PathwayController', function ($scope, $http, $stateParams, $cookieStore, $state, Upload) {
  $scope.user = $cookieStore.get('pathway_user')
  $http({method: 'GET',
         url: '/api/pathways/' + $stateParams.id
  }).success(function(data, status){
    $scope.pathway = data
  })
  $scope.create = function() {
    $scope.upload()
  }
  $scope.upload = function () {
    $scope.upload = Upload.upload({
      url: '/api/pathways',
      method: 'POST',
      pathway: $scope.pathway,
      fields: { 'pathway': $scope.pathway, 'user': $scope.user.id },
      file: $scope.pathway.avatar,
      fileFormDataName: 'pathway[image]'
    }).success(function(data){
      $scope.upload = data
      $state.go('selectProjects', {'id': data.id })
    }).error(function(data){
      console.log("error uploading: " + data.data)
    })
  }

});