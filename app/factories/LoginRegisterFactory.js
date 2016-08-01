"use strict";

app.factory("LoginRegisterFactory", function() {


    let currentUserId = null;
    let provider = new firebase.auth.GoogleAuthProvider();

    // firebase.auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //         currentUserId = user.uid;
    //     } else {
    //         currentUserId = null;
    //         console.log("not logged in");
    //     }
    // });

    let authWithProvider = function() {
        return firebase.auth().signInWithPopup(provider);
    };

    let isAuthenticated = function() {
        return (currentUserId) ? true : false;
    };

    let getUser = function() {
        return currentUserId;
    };

    let logout = function() {
        currentUserId = null;
    };

    let newUser = function(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function(error) {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                // ...
                console.warn(errorCode, errorMessage);
            });
    }

    let registeredUser = function(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // ...
            console.warn(errorCode, errorMessage);
        });
    }


    return {
        authWithProvider, isAuthenticated, getUser, currentUserId, logout, newUser, registeredUser
    };

});


app.run(["$location", "FireCreds", "LoginRegisterFactory",
    function($location, FireCreds, LoginRegisterFactory) {
        const authConfig = {
            apiKey: FireCreds.apiKey,
            authDomain: FireCreds.authDomain,
            databaseURL: FireCreds.databaseURL,
            storageBucket: FireCreds.storageBucket
        };



        firebase.initializeApp(authConfig);


        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // LoginRegisterFactory.setUser(user.uid); //set current user on login, switch to main view
                $location.url("/searchDatabase");
            } else {
                // LoginRegisterFactory.setUser(null); //this is to rest the current user to hide board.
                $location.url("/login");
            }
        });
    }
]);