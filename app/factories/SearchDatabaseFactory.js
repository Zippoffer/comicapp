"use strict";

app.factory("SearchDatabaseFactory", function($q, $http) { //the $q injects an Angular promise

    let comicList = (searchText) => {
        return $q(function(resolve, reject) {
            // $http.get(`http://gateway.marvel.com/v1/public/comics?limit=10&format=comic&formatType=comicts=1469737243&apikey=bf48bed3cb9a213603c0267fe6b78a65&hash=44aa3c9d6c0cde7760b59f76cc6599b3`) //the asterix allows for non-specific search
            // $http.get(`http://gateway.marvel.com:80/v1/public/characters?name=${searchText}&apikey=bf48bed3cb9a213603c0267fe6b78a65`) //the asterix allows for non-specific search
            $http.get(`http://gateway.marvel.com:80/v1/public/characters?limit=30&nameStartsWith=${searchText}&=json&apikey=bf48bed3cb9a213603c0267fe6b78a65`) //the asterix allows for non-specific search
            // $http.get(`http://www.omdbapi.com/?s=${searchText + '*'}&y=&plot=short&r=json`) //the asterix allows for non-specific search
            // $http.get(`http://swapi.co/api/people/${searchText}/`) //the asterix allows for non-specific search
            .success(function(comicData) {
                console.log("comics from marvel", comicData);
                resolve(comicData.data.results);
                console.log("name", comicData.data.results)
            })

            .error(function(error) {
                reject(error);
            });
        });
    };

    let getComicDetailsFromId = (comicId) => { //comicId was comicId\\
        return $q(function(resolve, reject) {
            // $http.get(`http://www.omdbapi.com/?i=${comicId}&plot=short&r=json`)
            $http.get(`http://www.gateway.marvel.com/?i=${comicId}&Id=json`)
                .success(function(comicData) {
                    resolve(comicData);
                })
                .error(function(error) {
                    reject(error);
                });
        });
    };

    return {
        comicList: comicList,
        getComicDetailsFromId: getComicDetailsFromId
    };
});






// http://gateway.marvel.com:80/v1/public/characters?apikey=bf48bed3cb9a213603c0267fe6b78a65

// var url = "http://gateway.marvel.com/v1/public/comics?limit=100&format=comic&formatType=comic&dateRange=" + beginDateStr + "%2C" + endDateStr + "&apikey=" + API_KEY;
// var ts = new Date().getTime();
// var hash = crypto.createHash('md5').update(ts + PRIV_KEY + API_KEY).digest('hex');
// url += "&ts=" + ts + "&hash=" + hash;



///////////////////////

////////////////////////
// var app = angular.module('marvelDemo', ['ngRoute', 'ui.bootstrap']);


// app.controller('MainCtrl', function($scope, $location, $http) {
//     $scope.char = {};
//     $scope.showCharInfo = false;
//     $scope.getCharacters = function(val) {
//         $scope.timeStamp = Date.now();
//         $scope.publicKey = "bf48bed3cb9a213603c0267fe6b78a65";
//         baseUrl = "http://gateway.marvel.com/v1/public/characters";
//         return $http.get(baseUrl, {
//             params: {
//                 nameStartsWith: val,
//                 limit: 25,
//                 ts: $scope.timeStamp,
//                 apikey: $scope.publicKey
//             }
//         }).then(function(response) {
//             $scope.charInfoArr = response.data.data.results;
//             return response.data.data.results.map(function(item) {

//                 return item.name;
//             });
//         });
//     };

//     $scope.selectCharacter = function(item) {
//         angular.forEach($scope.charInfoArr, function(obj, key) {
//             if (obj.name === item) {

//                 if (obj.thumbnail) {
//                     $scope.char.thumb = obj.thumbnail.path + "." + obj.thumbnail.extension;
//                 } else {
//                     $scope.char.thumb = "";
//                 }

//                 $scope.char.name = obj.name;
//                 $scope.char.desc = obj.description;
//                 $scope.showCharInfo = true;
//             }

//         });

//     }

// });

///////////////////////

//////////////////////



// "use strict";

// app.factory("SearchDatabaseFactory", function($q, $http) { //the $q injects an Angular promise

//     let movieList = (searchText) => {
//         return $q(function(resolve, reject) {
//             $http.get(`http://gateway.marvel.com/v1/public/comics?limit=100&format=comic&formatType=comicts=1469737243&apikey=bf48bed3cb9a213603c0267fe6b78a65&hash=44aa3c9d6c0cde7760b59f76cc6599b3`) //the asterix allows for non-specific search
//             // $http.get(`http://gateway.marvel.com:80/v1/public/characters?apikey=bf48bed3cb9a213603c0267fe6b78a65`) //the asterix allows for non-specific search
//             // $http.get(`http://www.omdbapi.com/?s=${searchText + '*'}&y=&plot=short&r=json`) //the asterix allows for non-specific search
//             // $http.get(`http swapi.co/api/planets/1/`) //the asterix allows for non-specific search
//             .success(function(movieData) {
//                 console.log("movies from omdb", movieData);
//                 resolve(movieData);
//             })
//                 .error(function(error) {
//                     reject(error);
//                 });
//         });
//     };

//     let getMovieDetailsFromId = (movieId) => {
//         return $q(function(resolve, reject) {
//             $http.get(`http://www.omdbapi.com/?i=${movieId}&plot=short&r=json`)
//                 .success(function(movieData) {
//                     resolve(movieData);
//                 })
//                 .error(function(error) {
//                     reject(error);
//                 });
//         });
//     };

//     return {
//         movieList: movieList,
//         getMovieDetailsFromId: getMovieDetailsFromId
//     };
// });