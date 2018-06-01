

'use strict';

define([], function () {

    function SecondController($scope,$timeout) {
        var timer=null;
        var time=60;
        $scope.isSending=false;//发送验证码中
        $scope.sendCodeText=function(){
            if($scope.isSending){
                return time+'s重新发送';
            }else{
                return '发送验证码';
            }
        };
        $scope.sendCode=function(){//发送验证码
            //$scope.phoneStatus=true;
            if($scope.isSending){
                return;
            }
            $scope.isSending=true;
            var countDown=function(){
                if(time>0){
                    time--;
                    $timeout(countDown,100);
                }else{
                    time=60;
                    $scope.isSending=false;
                }
            };
            countDown();
        };
    }

    return SecondController;
});
