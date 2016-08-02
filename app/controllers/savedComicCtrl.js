"use strict";

app.controller("savedComicCtrl", function($scope, $location, LoginRegisterFactory, SearchDatabaseFactory) {

    $scope.$on('onRepeatLast', function(scope, element, attrs) {
        $('.materialboxed').materialbox();
    });

    $scope.loadSavedComic = function() {
        // $scope.Comic.uid = LoginRegisterFactory.getUser();

        SearchDatabaseFactory.getComic(LoginRegisterFactory.getUser())
            .then(function(response) {
                console.log("response", response)
                $scope.butt = response;
                //     $location.path("/partials/savedComics");
                //     SearchDatabaseFactory.getComic();
                //     console.log("savedComics", savedComics)
            });
    };
    $scope.loadSavedComic();
});