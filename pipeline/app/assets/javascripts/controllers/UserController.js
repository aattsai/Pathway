'use strict';

pathwayApp.controller('UserController', 
  function($scope, $http) { 
    $scope.userEmail = sessionStorage.email
    $scope.signedIn = function() {
      return sessionStorage.access_token ? true : false
    }
    $scope.login = function() {
      $http({method: 'POST', 
             url: '/api/login',
             data: {username: $scope.user.email, password: $scope.user.password},
             success_message: "You have been logged in.",
             error_entity: $scope.login_error
       }).success(function(data, status){
        sessionStorage.access_token = data.access_token
        sessionStorage.email = data.email
        $scope.message = "You have been logged in."
        window.location.href = '/'
       }).error(function(data, status){
        $scope.message = data.error
       })
  };
  $scope.logout = function() {
    $http({
      method: 'DELETE',
      url: '/api/login',
      user: {} })
    .success(function(data, status){ 
      sessionStorage.removeItem('access_token')
      sessionStorage.removeItem('email')
    })
  };
  $scope.register = function() {
    $http({
      method: 'POST',
      url: '/api/register',
      data: {user: {first_name: $scope.user.firstName, last_name: $scope.user.lastName, email: $scope.user.email, password: $scope.user.password}},
      success_message: "Account has been successfully created!",
      error_entity: $scope.register_error
    }).success(function(data, status){
      sessionStorage.access_token = data.access_token
      sessionStorage.email = data.email
      window.location.href = "/"
    }).error(function(data, status){
      $scope.message = data.error
    })
  }
  }
)