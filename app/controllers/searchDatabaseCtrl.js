'use strict';
app.controller("searchDatabaseCtrl", function($scope, SearchDatabaseFactory, $location, LoginRegisterFactory) {
    $scope.comics = [];
    $scope.uid = LoginRegisterFactory.getUser();
    $scope.Comic = {};


    $scope.$on('onRepeatLast', function(scope, element, attrs) {
        $('.materialboxed').materialbox();
    });


    // I need to pass the navbar data into this\\\
    // $(".button-collapse").sideNav()
    $(document).ready(function() {
        // Activate the side menu 
        $(".button-collapse").sideNav();
    });



    // $('.button-collapse').sideNav({
    //     menuWidth: 300, // Default is 240
    //     edge: 'left', // Choose the horizontal origin
    //     closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    // });





    $scope.searchDatabase = function(comicToSearch) {
        SearchDatabaseFactory.comicList(comicToSearch).then(function(comicData) {
            console.log("in the controller i see comic data...", comicData);
            $scope.comics = comicData;
            console.log("comicscope", $scope.comics)
        })
    }


    $scope.saveComic = function($indexValueofSumthin, savedComics, ObjFromFirebase) {

        let clickedComic = $scope.comics[$indexValueofSumthin]
        let chosenComic = {};
        console.log("$indexValueofSumthin", $indexValueofSumthin)
        chosenComic.name = clickedComic.name;
        chosenComic.description = clickedComic.description;
        chosenComic.id = clickedComic.id;
        chosenComic.thumbnail = clickedComic.thumbnail;
        chosenComic.uid = LoginRegisterFactory.getUser();
        chosenComic.date = Date();
        // console.log("ObjFromFirebase", )

        console.log("comscopid", $scope.Comic)
        // SearchDatabaseFactory.postNewComic($scope.Comic)
        SearchDatabaseFactory.postNewComic(chosenComic)
        // .then(function(response) {
        //     $location.path("/partials/savedComics");
        //     SearchDatabaseFactory.getComic();
        //     console.log("savedComics", savedComics)
        // });
        console.log("chosenComic", chosenComic)
    };

    // $scope.deleteComicCall = function(comic) {
    //     SearchDatabaseFactory.deleteComic(comic)
    //         .then((savedComics) => {
    //             $scope.comics = savedComics;
    //             $location.path("/partials/SearchDatabase");
    //             SearchDatabaseFactory.getComic()
    //                 .then((savedComics) => {
    //                     $scope.comics = savedComics;
    //                 });
    //         });
    // };

})

/////////delete functions to be\\\\\\\\\\\\\\\\\\\\\\\\



// if (LoginRegisterFactory.isAuthenticated()) {
//     SearchDatabaseFactory.getComic($scope.uid)
//         .then(function(savedComics) {
//             $scope.comics = savedComics;

//             $scope.chosenComic = $scope.comics.filter(function(comic) {
//                 return comic.id === $routeParams.comicId;
//             })[0];
//         });
// } else {}





////still working on delete functionality\\\\\\\\\

// $scope.addNewcomic = function() {
//     $scope.newBoard.uid = AuthFactory.getUser();
//     $scope.newBoard.date = Date();
//     ItemStorage.postNewBoard($scope.newBoard)
//         .then(function(response) {
//             $location.path("/partials/mainboard");
//             ItemStorage.getBoards();
//         });
// };






// id: {},
// name: {},
// description: {},
// thumbnail: {},
// date: null



// 'use strict';

// app.controller("searchDatabaseCtrl", function($scope, SearchDatabaseFactory) {
//     $scope.movies = [];

//     $scope.searchDatabase = function(movieToSearch) {
//         SearchDatabaseFactory.movieList(movieToSearch).then(function(movieData) {
//             console.log("in the controller i see movie data...", movieData);
//             $scope.movies = movieData.Search;
//         })
//     }
// })