'use strict';

//ngRoute is being injected into the app at this point\\


var app = angular.module("ComicApp", ["ngRoute"]);

app.config(function($routeProvider, FireCreds) {


    $routeProvider.

    when('/login', {
        templateUrl: 'partials/loginRegister.html',
        controller: 'loginRegisterCtrl'
    }).
    when('/searchDatabase', {
        templateUrl: 'partials/searchDatabase.html',
        controller: 'searchDatabaseCtrl'
    }).
    when('/savedComics', {
        templateUrl: 'partials/savedComics.html',
        controller: 'savedComicCtrl'
    })

});