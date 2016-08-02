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
    when('/ComicApp/savedComics', {
        templateUrl: 'partials/savedComics.html',
        controller: 'searchDatabaseCtrl'
    })


});



// when('/characters/:id', {
//      templateUrl: 'src/views/detail.html',
//      controller: 'Detail as vm'
//  }).
//  otherwise({
//      redirectTo: '/characters'
//  });
// 'use strict';

// //ngRoute is being injected into the app at this point\\


// var app = angular.module("MovieApp", ["ngRoute"])

// app.config(function($routeProvider) {

//     $routeProvider.
//     when('/login', {
//         templateUrl: 'partials/loginRegister.html',
//         controller: 'loginRegisterCtrl'
//     }).
//     when('/searchDatabase', {
//         templateUrl: 'partials/searchDatabase.html',
//         controller: 'searchDatabaseCtrl'
//     })

// });
// .when('/', {
//     templateUrl: 'partials/loginRegister.html',
//     controller: 'loginCtrl'
// })
// .when('/input', {
//     templateUrl: 'partials/inputMadlib.html',
//     controller: 'inputMadlibCtrl'
// })
// .when('/output', {
//     templateUrl: 'partials/outputMadlib.html',
//     controller: 'outputMadlibCtrl'
// })
// .when('/login', {
//     templateUrl: 'partials/loginRegister.html',
//     controller: 'loginCtrl'
// })
// .when('/logout', {
//     templateUrl: 'partials/loginRegister.html',
//     controller: 'loginCtrl'
// })
// .when('/beesknees', {
//     templateUrl: 'partials/inputMadlib.html',
//     controller: 'inputMadlibCtrl'
// });