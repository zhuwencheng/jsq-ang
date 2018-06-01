/**
 * Created with IntelliJ IDEA.
 * User: Mateusz
 * Date: 22.11.12
 * Time: 22:04
 */

'use strict';

define([], function () {

    return ['myDialog', function () {
        return {
            "restrict": "ECMA",
            transclude: true,
            scope: {
                title: '@',
                close: '&',
                isShow:'='
            },
            "template": '<div class="dialog" ng-show="isShow">'+
                '<div class="d-mask"></div>'+
                '<div class="dia-content">'+
                    '<div class="dia-title">{{title}}<em ng-click="closedia()"></em></div>'+
                    '<div  ng-transclude class="dia-body"></div>'+
                '</div>'+
            '</div>',
            // template:'<p>我是分页</p>',
            'replace': true,
            controller: function ($scope, $element, $attrs) {
                $scope.closedia=function(){
                    $scope.isShow=false;
                    //$scope.close();
                }
            }
        }
    }]
})