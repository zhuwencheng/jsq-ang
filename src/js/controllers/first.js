

'use strict';

define(['layer'], function (layer) {
    function FirstController($scope) {
        $scope.message = "I'm the 1st controller!";
    }

    return FirstController;
});