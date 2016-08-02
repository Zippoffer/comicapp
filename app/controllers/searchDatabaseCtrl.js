'use strict';
app.controller("searchDatabaseCtrl", function($scope, SearchDatabaseFactory, $location, LoginRegisterFactory) {
    $scope.comics = [];
    $scope.uid = LoginRegisterFactory.getUser();
    $scope.searchDatabase = function(comicToSearch) {
        SearchDatabaseFactory.comicList(comicToSearch).then(function(comicData) {
            console.log("in the controller i see comic data...", comicData);
            $scope.comics = comicData;
            console.log("comicscope", $scope.comics)
        })
    }


    $scope.$on('onRepeatLast', function(scope, element, attrs) {
        $('.materialboxed').materialbox();
    });


    $scope.Comic = {
        id: {},
        name: {},
        description: {},
        thumbnail: {},
        date: null,
    };

    $scope.saveComic = function($indexValueofSumthin, savedComics, $location) {
        let clickedComic = $scope.comics[$indexValueofSumthin]
        let chosenComic = {};
        chosenComic.name = clickedComic.name;
        chosenComic.description = clickedComic.description;
        chosenComic.id = clickedComic.id;
        chosenComic.thumbnail = clickedComic.thumbnail;

        $scope.Comic.uid = LoginRegisterFactory.getUser();
        $scope.Comic.date = Date();
        console.log("comscopid", $scope.Comic)
        // SearchDatabaseFactory.postNewComic($scope.Comic)
        SearchDatabaseFactory.postNewComic(chosenComic)
            .then(function(response) {
                $location.path("/partials/savedComics");
                savedComics.getComic();
                console.log("savedComics", savedComics)
            });
    };




    /////////delete functions to be\\\\\\\\\\\\\\\\\\\\\\\\



    if (LoginRegisterFactory.isAuthenticated()) {
        SearchDatabaseFactory.getComic($scope.uid)
            .then(function(savedComics) {
                $scope.comics = savedComics;

                $scope.chosenComic = $scope.comics.filter(function(comic) {
                    return comic.id === $routeParams.comicId;
                })[0];
            });
    } else {}




    $scope.deleteComicCall = function(comic) {
        SearchDatabaseFactory.deleteComic(comic)
            .then((savedComics) => {
                $scope.comics = savedComics;
                $location.path("/partials/SearchDatabase");
                SearchDatabaseFactory.getComic()
                    .then((savedComics) => {
                        $scope.comics = savedComics;
                    });
            });
    };

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




})






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