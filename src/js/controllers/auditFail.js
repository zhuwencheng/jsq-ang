

'use strict';

define([], function () {

    function SecondController($scope) {
        $scope.goLogin = function(){
            location.href="#/steamLogin";
        };
    }

    return SecondController;
});
