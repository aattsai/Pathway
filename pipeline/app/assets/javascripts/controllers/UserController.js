'use strict';

pathwayApp.controller('UserController', 
  function($scope, $http, Auth, $state, $cookieStore) { 
    if ($cookieStore.get('pathway_user')) {$scope.userEmail = $cookieStore.get('pathway_user').email}
    $scope.userId = 0
    $scope.signedIn = function() {
      return $cookieStore.get('pathway_user') ? true : false
    }
    $scope.researcher = function() {
      return sessionStorage.researcher == "true" ? true : false
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
        $scope.userId = data.user_id
        $scope.message = "You have been logged in."
        window.location.href = '/'
       }).error(function(data, status){
        $scope.message = data.error
       })
  };

  $scope.logout = function() {
      $http({method: 'DELETE',
              url: '/api/login/'+ $scope.userId
  // $scope.researchLogin = function() {
  //     $http({method: 'POST', 
  //            url: '/teams/sign_in',
  //            data: {email: $scope.researcher.email, password: $scope.researcher.password},
  //            error_entity: $scope.login_error
  //      }).success(function(data, status){
  //       console.log("hello from research login")
  //      }).error(function(data, status){
  //       $scope.message = data.error
  //      })
  // };
  $scope.researchLogin = function() {
      $http({method: 'POST', 
             url: '/api/researcher',
             data: {username: $scope.researcher.email, password: $scope.researcher.password},
             error_entity: $scope.login_error
       }).success(function(data, status){
        sessionStorage.access_token = data.access_token
        sessionStorage.email = data.email
        sessionStorage.researcher = true
        $scope.researcherId = data.user_id
        $scope.message = "You have been logged in."
        window.location.href = '/'
       }).error(function(data, status){
        $scope.message = data.error
       })
  };
      var credentials = {
        email: $scope.user.email,
        password: $scope.user.password
      };
      var config = {
          headers: {
              'X-HTTP-Method-Override': 'POST'
          }
      };
      Auth.login(credentials, config).then(function(user) {
        console.log(user);
        $cookieStore.put('pathway_user', user);
        Auth.currentUser().then(function(user) {
          $state.go('home')
        }, function(err) {
          console.log(error)
        });
      }, function(data) {
        console.log(data)
        $scope.message = data.error
      });
    }
    $scope.researchLogin = function() {
      var credentials = {
        email: $scope.researcher.email,
        password: $scope.researcher.password
      };
      var config = {
          headers: {
              'X-HTTP-Method-Override': 'POST'
          }
      };
      Auth.login(credentials, config).then(function(user) {
        console.log(user);
        $scope.currentUser = user
        Auth._currentUser = user
      }, function(error) {
          console.log(error)
      });
    }
  $scope.logout = function() {
    var config = {
      headers: {
          'X-HTTP-Method-Override': 'DELETE'
      }
    };
    Auth.logout().then(function(user) {
        debugger
        $scope.message = "You have logged out"
        $cookieStore.remove('pathway_user')
        $state.go('home')
    }, function(error) {
        $scope.message = "Problem logging out: " + error.error 
    });
  }

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