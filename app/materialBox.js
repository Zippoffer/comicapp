    ///*****attempt at getting materialbox to work********\\\
    
app.directive('onLastRepeat', function() {
  return function(scope, element, attrs) {
    if (scope.$last)
      setTimeout(function() {
        scope.$emit('onRepeatLast', element, attrs);
    }, 1);
  };
});


    // $scope.materialBox = (function() {
    //     $('.materialboxed').materialbox();
    // })();