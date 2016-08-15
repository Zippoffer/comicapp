'use strict';

app.controller("loginRegisterCtrl", function($scope, LoginRegisterFactory, $route) {
    $scope.registerMode = true;

    $scope.activateRegisterMode = function() {
        $scope.registerMode = true;
    };
    $scope.activateLoginMode = function() {
        $scope.registerMode = false;
    };
    $scope.newEmail = function() {
        LoginRegisterFactory.newUser($scope.email, $scope.password)
            .then(function(result) {
                console.log("signedUp", result.uid)
            });
        console.log("newUser", $scope.email)
        Materialize.toast('Youare registered', 4000, 'indigo accent-1')
    }
    $scope.returningUser = function() {
        LoginRegisterFactory.registeredUser($scope.email, $scope.password)
            .then(function(result) {
                $route.reload();
                console.log("signedIn", result.uid)
                Materialize.toast('You are signed in', 4000, 'blue lighten-2')
            });
        console.log("returningUser", $scope.email)
        // Materialize.toast('Welcome Back!!!', 4000, 'indigo accent-1')
    }
    $scope.logout = function() {
        firebase.auth().signOut()
            .then(function() {
                // Sign-out successful.
                $route.reload();
                console.log(LoginRegisterFactory.getUser(), "Logged out");
                Materialize.toast('You are Logged Out', 4000, 'red lighten-2')
                // LoginRegisterFactory.setUser(null);
            }, function(error) {
                // An error happened.
                console.log(error);
            });
    };

});