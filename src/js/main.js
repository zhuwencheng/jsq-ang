/**
 * Created with IntelliJ IDEA.
 * User: Mateusz
 * Date: 14.11.12
 * Time: 18:58
 */

'use strict';

require.config({
    baseUrl:'js',
    paths:{
        text:'../lib/require/text',
        jquery:'../lib/jquery/jquery',
        angular:'../lib/angular/angular',
        layer:'../lib/layer/layer',
        qrcode:'../lib/qrcode'
    },
    shim:{
        'angular':{
            exports:'angular'
        },
        'layer':{
            deps: ['jquery']
        }
    },
    priority:[
        'angular'
    ],
    urlArgs:'v=1.1'
});

require([
    'angular',
    'text',
    'jquery',
    'layer',
    'app',
    'qrcode',
    'routes'
], function (angular) {
    $(document).ready(function () {
        angular.bootstrap(document, ['myApp']);
    });
});