

'use strict';

define([], function () {

    function SecondController($scope) {
        $scope.zfShow = false;
        $scope.sucStatus = false;
        $scope.MAX_TIME = 10;
        $scope.MIN_TIME = 2;
        $scope.shopTime = 2;
        $scope.type=null;
        $scope.chooseTime=null;
        $scope.shopType = [
            {
                title: '即用即停',
                des: '按小时收费，不用可暂停',
                type: 1,
                desC: true,
                money: 24
            },
            {
                title: '月卡',
                des: '只需一元，让你嗨一天',
                type: 2,
                desC: false,
                money: 30
            },
            {
                title: '季卡',
                des: '直接给八折，还不来单',
                type: 3,
                desC: false,
                money: 90
            }
        ];
        $scope.shopType2 = [
            {
                title: '3小时',
                des: '3元体验特惠，不包月',
                time: 3,
                type: 4,
                money: 3
            },
            {
                title: '5小时',
                des: '3元体验特惠，不包月',
                time: 5,
                type: 4,
                money: 5
            },
            {
                title: '7小时',
                des: '3元体验特惠，不包月',
                time: 7,
                type: 4,
                money: 7
            }
        ]
        $scope.changeTime = function (a) {
            $scope.shopTime = $scope.shopTime + a;
            $scope.shopTime < $scope.MIN_TIME ? $scope.shopTime = $scope.MIN_TIME : '';
            $scope.shopTime > $scope.MAX_TIME ? $scope.shopTime = $scope.MAX_TIME : '';
        };
        $scope.choose = function (item) {
            $scope.type=item.type;
            if(item.time){
                $scope.shopTime=item.time;
            }
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

    return SecondController;
});
