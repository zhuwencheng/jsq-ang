

'use strict';

define([], function () {

    function MainController($scope) {
        $scope.zfShow = false;
        $scope.sucStatus = false;
        $scope.MAX_TIME = 24;
        $scope.MIN_TIME = 2;
        $scope.shopTime = 2;
        $scope.queryPayOptions={
            price:6,
            bm:20,
            cPrice:10,
            url:'https://www.tapd.cn/21824051/bugtrace/bugreports/my_view'
        }
        $scope.sucOptions={
            code:'2421435w1asdf',
            startTime:'2018-05-12 13:00:23',
            endTime:'2018-05-12 13:00:23'
        }
        $scope.changeTime = function (a) {
            $scope.shopTime = $scope.shopTime + a;
            $scope.shopTime < $scope.MIN_TIME ? $scope.shopTime = $scope.MIN_TIME : '';
            $scope.shopTime > $scope.MAX_TIME ? $scope.shopTime = $scope.MAX_TIME : '';
        };
        $scope.stopAccount=function(){
            layer.msg('暂停成功！');
        };
        $scope.createOrder=function(){
            $scope.zfShow=true;
            //此处修改queryPayOptions的值
            var qrcode = new QRCode(document.getElementById("qrcode"), {
                width: 195, //设置宽高
                height: 195
            });
            qrcode.makeCode($scope.queryPayOptions.url);
        };
        $scope.showSuccess=function(){//支付成功后弹出成功窗口配置sucOptions
            $scope.sucStatus=true;
        }
    }

    return MainController;
});
