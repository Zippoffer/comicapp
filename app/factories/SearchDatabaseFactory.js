"use strict";

app.factory("SearchDatabaseFactory", function($routeParams, $q, $http, LoginRegisterFactory) { //the $q injects an Angular promise




    let comicList = (searchText) => {
        return $q(function(resolve, reject) {

            // $http.get(`http://gateway.marvel.com:80/v1/public/characters?limit=100&nameStartsWith=${searchText}&=json&apikey=bf48bed3cb9a213603c0267fe6b78a65`) //the asterix allows for non-specific search
            // $http.get(`http://gateway.marvel.com:80/v1/public/comics?startYear=${searchText}&=json&apikey=bf48bed3cb9a213603c0267fe6b78a65`) //the asterix allows for non-specific search
            // $http.get(`http://gateway.marvel.com:80/v1/public/comics?limit=50&titleStartsWith=${searchText}&=json&apikey=bf48bed3cb9a213603c0267fe6b78a65`) //the asterix allows for non-specific search
            $http.get(`http://gateway.marvel.com:80/v1/public/comics?limit=25&titleStartsWith=${searchText}&=json&apikey=bf48bed3cb9a213603c0267fe6b78a65`) //the asterix allows for non-specific search
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



    let getComic = (uid) => {
        return $q(function(resolve, reject) {

            $http.get(`https://comicsapp-db242.firebaseio.com/comics/.json?orderBy="uid"&equalTo="${uid}"`)
                .success(function(comicData) {
                    resolve(comicData);
                    console.log("comicData", comicData)
                })
                .error(function(error) {
                    reject(error);
                });
        });
    };



    let postNewComic = (chosenComic) => {
        return $q(function(resolve, reject) {
            $http.post(`https://comicsapp-db242.firebaseio.com/comics/.json`, chosenComic)
            // JSON.stringify(chosenComic))
            .success(function(ObjFromFirebase) {
                console.log("comDat", ObjFromFirebase.name)
                let chosenComicId = ObjFromFirebase.name;
                // chosenComic.ComicId = chosenComicId;
                // $http.patch(`https://comicsapp-db242.firebaseio.com/comics/.json/Comics/${chosenComicId}.json`, chosenComic);
            })
        });
    };

    /////this was in postNewComic\\\\\\\
    // resolve(ObjFromFirebase);
    // .error(function(error) {
    //     reject(error);
    // });


    ///////////*****still working on delete functionality**********\\\\\\\\\\\

    var deleteComic = (comic, FirebaseURL) => {
        console.log("this is a deleted comic", comic);
        return $q((resolve, reject) => {
            $http.delete(`https://comicsapp-db242.firebaseio.com/comics/${comic}.json`)
                .success((data) => {
                    resolve(data);
                })
                .error((error) => {
                    reject(error);
                });
        });
    };
    //////////////***********typeahead**********\\\\\\\\\\\\\\\\

    // var gatheredComics = new Bloodhound({
    //     datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    //     queryTokenizer: Bloodhound.tokenizers.whitespace,
    //     prefetch: '../public/characters?.json',
    //     remote: {
    //         // url: '../data/films/queries/%QUERY.json',
    //         url: '../public/characters?.json',
    //         wildcard: '%QUERY'
    //     }
    // });


    /////////////////**************typeahead*************\\\\\\\\\\\\\\\\\\\

    return {
        comicList: comicList,
        getComic: getComic,
        postNewComic: postNewComic,
        deleteComic: deleteComic
        // gatheredComics: gatheredComics
    };
});