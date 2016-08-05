'use strict';
app.controller("searchDatabaseCtrl", function($scope, SearchDatabaseFactory, $location, LoginRegisterFactory) {
    $scope.comics = [];
    $scope.uid = LoginRegisterFactory.getUser();
    $scope.Comic = {};


    $scope.$on('onRepeatLast', function(scope, element, attrs) {
        $('.materialboxed').materialbox();
    });



    $scope.$on('onRepeatLast', function(scope, element, attrs) {
        $('.modal-trigger').leanModal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            in_duration: 300, // Transition in duration
            out_duration: 200, // Transition out duration
            starting_top: '4%', // Starting top style attribute
            ending_top: '10%', // Ending top style attribute
            // ready: function() {
            //     alert('Ready');
            // }, // Callback for Modal open
            // complete: function() {
            //     alert('Closed');
            // } // Callback for Modal close
        });

    });


    (function() {

        $(".button-collapse").sideNav();

    })();




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



})