// "use strict";

// app.controller("savedComicCtrl", function($scope, savedComics, $location, LoginRegisterFactory, searchDatabase) {

//     $scope.Comic = {
//         uid: null,
//         title: "",
//         date: null,
//         tags: "",
//     };

//     $scope.saveComic = function() {
//         $scope.Comic.uid = LoginRegisterFactory.getUser();
//         console.log("comscopid", $scope.Comic)
//         savedComics.postComic($scope.Comic)
//             .then(function(response) {
//                 $location.path("/partials/savedComics");
//                 savedComics.getComic();
//                 console.log("savedComics", savedComics)
//             });
//     };

// });