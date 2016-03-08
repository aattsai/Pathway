'use strict'

angular.module('pathwayApp')
.controller('ProjectController', function ($scope, $http, $stateParams, $state) {
  $http({method: 'GET',
         url: '/api/pathways/' + $stateParams.pathway_id + '/projects/' + $stateParams.id
  }).success(function(data, status){
    $scope.project = data
  })
  $scope.projects = $http({method: 'GET',
         url: '/api/projects'
  }).success(function(data, status){
    $scope.allProjects = data
  })
  $scope.create = function() {
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
  var projects = 0
  var currentPathway = 0
  $scope.projectsAdded = []
  $scope.addProject = function(project, donated_weight) {
    var projectObj = project
    $http({method: 'POST',
      url: '/api/pathways/' + $stateParams.id + '/projects',
      data: {projects: project, weight: donated_weight } 
    }).success(function(data, status){
      projects += 1
      currentPathway = data.pathway_id
      $scope.projectsAdded.push(projectObj.name)
      if (projects == 10) {$state.go('showPathway', {'id': currentPathway })} 
    }).error(function(data){
      console.log("Error adding project")
    })
  }
  $scope.nextPage = function() {
    $state.go('showPathway', {'id': $stateParams.id})
  }
});