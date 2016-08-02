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
    // $('.button-collapse').sideNav({
    //     menuWidth: 300, // Default is 240
    //     edge: 'left', // Choose the horizontal origin
    //     closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    // });
});









/////
// "use strict";

// app.controller("LogInCtrl", function($scope, $location, LoginRegisterFactory) {




//     $scope.login = function() {


//         LoginRegisterFactory.authWithProvider()
//             .then(function(result) {
//                 var user = result.user.uid;
//                 console.log("logged in ", user);
//                 $location.path("#/pinhead/mainboard");
//                 $scope.$apply();
//             }).catch(function(error) {
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                 var email = error.email;
//                 var credential = error.credential;
//             });
//     };

// });
// //////

// //////
// "use strict";

// app.controller("logOutCtrl", function($scope, $location, LoginRegisterFactory) {

//     $scope.logout = function() {

//         $location.path('/');
//         firebase.auth().signOut().then(function() {
//             // Sign-out successful.
//             LoginRegisterFactory.currentUserID = null;
//             // LoginRegisterFactory.logout();
//             // need to test above coding
//             console.log(LoginRegisterFactory.getUser(), "Logged out");
//         }, function(error) {
//             // An error happened.
//             console.log(error);
//         });
//     };
// });
// ////////