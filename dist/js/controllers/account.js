

'use strict';

define([], function () {

    function SecondController($scope, $timeout,$location) {
        $scope.jbDiaStatus = false;
        $scope.confirmUntie = function () {
            $scope.jbDiaStatus = true;
        };
        $scope.cancelUntie = function () {
            $scope.jbDiaStatus = false;
        };
        $scope.untie = function () {
            var index = layer.load(2);
            $timeout(function () {
                $scope.jbDiaStatus = false;
                layer.close(index);
            }, 2000)
        };
        $scope.toEdit = function () {
            
        }
    }
    return SecondController;
});
