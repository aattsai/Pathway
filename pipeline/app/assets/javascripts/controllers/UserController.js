'use strict';

pathwayApp.controller('UserController',
  function($scope, $http, Auth, $state, $cookieStore) {
    if ($cookieStore.get('pathway_user')) {
      $scope.firstName = $cookieStore.get('pathway_user').first_name
    }
    $scope.userId = $cookieStore.get('pathway_user') ? $cookieStore.get('pathway_user').id : 0
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
        $cookieStore.put('pathway_user', user);
        Auth.currentUser().then(function(user) {
          window.location.href = '/'
        }, function(error) {
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
  $scope.update = function() {
    $http({
      method: 'PUT',
      url: '/api/users/' + $scope.userId,
      data: {user: $scope.user}
    }).success(function(data, status){
      console.log("hello from create()")
      $state.go('home')
    }).error(function(data){
      console.log(data)
    })
  }
  $scope.loadUser = function() {
    $http({method: 'GET',
         url: '/api/users/' + $scope.userId
    }).success(function(data, status){
      $scope.userInfo = data
    }).error(function(data){
      console.log("User is not logged in")
    })
  }

  $scope.userInfo = $scope.loadUser()
})