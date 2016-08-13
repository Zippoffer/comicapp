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
    }
    $scope.returningUser = function() {
        LoginRegisterFactory.registeredUser($scope.email, $scope.password)
            .then(function(result) {
                $route.reload();
                console.log("signedIn", result.uid)
            });
        console.log("returningUser", $scope.email)
    }
    $scope.logout = function() {
        firebase.auth().signOut()
            .then(function() {
                // Sign-out successful.
                $route.reload();
                console.log(LoginRegisterFactory.getUser(), "Logged out");
                // LoginRegisterFactory.setUser(null);
            }, function(error) {
                // An error happened.
                console.log(error);
            });
    };

});