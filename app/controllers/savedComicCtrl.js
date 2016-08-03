"use strict";

app.controller("savedComicCtrl", function($scope, $location, LoginRegisterFactory, SearchDatabaseFactory, $route) {

    $scope.$on('onRepeatLast', function(scope, element, attrs) {
        $('.materialboxed').materialbox();
    });

    $scope.loadSavedComic = function() {
        // $scope.Comic.uid = LoginRegisterFactory.getUser();
        let items = [];
        SearchDatabaseFactory.getComic(LoginRegisterFactory.getUser())
            .then(function(response) {
                console.log("response", response)
                Object.keys(response).forEach(function(key) {
                    response[key].id = key;
                    items.push(response[key]);

                });
                $scope.butt = items;
                //     $location.path("/partials/savedComics");
                //     SearchDatabaseFactory.getComic();
                //     console.log("savedComics", savedComics)
            });
    };
    $scope.loadSavedComic();


    $scope.deleteComicCall = function(comic) {

        SearchDatabaseFactory.deleteComic(comic.id)
            .then((chosenComic) => {
                console.log("you clicked delete", comic)
                $scope.comics = chosenComic;
                $route.reload();
                // $location.path("/savedComics");
                SearchDatabaseFactory.getComic()
                    .then((chosenComic) => {
                        $scope.comics = chosenComic;
                    });
            });
    };
});