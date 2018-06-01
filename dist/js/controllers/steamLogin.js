'use strict';

define([], function () {

    function SecondController($scope,$timeout,$http) {
        var timer=null;
        var time=60;
        $scope.phoneStatus = false;//手机号绑定弹窗
        $scope.sucStatus = false;//成功弹窗
        $scope.failStatus=false;//失败弹窗
        $scope.isSending=false;//发送验证码中
        $scope.form1={
            user:null,
            pwd:null
        }
        $scope.form2={
            phone:null,
            code:null
        }
        $scope.sendCodeText=function(){
            if($scope.isSending){
                return time+'s重新发送';
            }else{
                return '发送验证码';
            }
        };
        $scope.login=function(){//登录
            console.log($scope.loginForm);
            //$http ajax用这个
            $scope.phoneStatus=true;
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
        $scope.submitPhone=function(){
            $scope.phoneStatus=false;
        };
        $scope.showSuccess=function(){
            $scope.phoneStatus=false;
            $scope.sucStatus=true;
        };
        $scope.showFail=function(){
            $scope.phoneStatus=false;
            $scope.failStatus=true;
        };
    }

    return SecondController;
});
