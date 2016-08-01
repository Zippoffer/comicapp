'use strict';
app.controller("searchDatabaseCtrl", function($scope, SearchDatabaseFactory) {
    $scope.comics = [];

    $scope.searchDatabase = function(comicToSearch) {
        SearchDatabaseFactory.comicList(comicToSearch).then(function(comicData) {
            console.log("in the controller i see comic data...", comicData);
            $scope.comics = comicData;
            console.log("comicscope", $scope.comics)
        })
    }
    ////////////**********I added this as an experiment. trying to get images to populate************\\\\\\\\\\\\\
    // $scope.getComic = function(comics) {
    //     $http({
    //         url: `http://gateway.marvel.com:80/v1/public/characters?nameStartsWith=${searchText}&=json&apikey=bf48bed3cb9a213603c0267fe6b78a65`
    //     })
    //         .then(function(response) {
    //             comics.imgUrl = response.data.thumbnail;
    //         });
    //     return "/img/thumbnail.jpg";
    // };
    //////////////////**************************************************\\\\\\\\\\\\\\\\\\\\
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