'use strict';

pathwayApp.controller('UserController',
  function($scope, $http, Auth, $state, $cookieStore) {
    if ($cookieStore.get('pathway_user')) {
      $scope.userEmail = $cookieStore.get('pathway_user').email
      $scope.userInfo = $cookieStore.get('pathway_user')
    }
    $scope.userId = 0
    $scope.signedIn = function() {
      return $cookieStore.get('pathway_user') ? true : false
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
        $scope.message = data.data.error
      });
    }
  $scope.logout = function() {
    var config = {
      headers: {
          'X-HTTP-Method-Override': 'DELETE'
      }
    };
    Auth.logout().then(function(user) {
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
        console.log(registeredUser);
        $scope.currentUser = registeredUser
        $state.go('home')
    }, function(error) {
      console.log(error.data.errors)
        // Registration failed...
    });
  }
  }
)