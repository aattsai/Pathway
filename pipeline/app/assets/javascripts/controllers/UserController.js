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
    var credentials = {
        email: $scope.user.email,
        password: $scope.user.password,
        first_name: $scope.user.firstName,
        last_name: $scope.user.lastName
    };
    var config = {
        headers: {
            'X-HTTP-Method-Override': 'POST'
        }
    };

    Auth.register(credentials, config).then(function(registeredUser) {
        console.log(registeredUser); // => {id: 1, ect: '...'}
    }, function(error) {
        // Registration failed...
    });
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