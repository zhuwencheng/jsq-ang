'use strict';

define(['app', 'utils/route-config'], function (app, routeConfig) {
    return app.config(function ($routeProvider) {
        $routeProvider.when('/index', routeConfig.config('../pages/index.html', 'controllers/first'));
        $routeProvider.when('/steamLogin', routeConfig.config('../pages/steamLogin.html', 'controllers/steamLogin', ['directives/dialog']));
        $routeProvider.when('/auditFail', routeConfig.config('../pages/auditFail.html', 'controllers/auditFail'));
        $routeProvider.when('/suspend', routeConfig.config('../pages/suspend.html', 'controllers/suspend'));
        $routeProvider.when('/userCenter', routeConfig.config('../pages/userCenter.html', 'controllers/userCenter',['directives/dialog']));
        $routeProvider.when('/jsqList', routeConfig.config('../pages/jsqList.html', 'controllers/jsqList',['directives/dialog']));
        $routeProvider.when('/account', routeConfig.config('../pages/account.html', 'controllers/account',['directives/dialog']));
        $routeProvider.when('/editCount', routeConfig.config('../pages/editCount.html', 'controllers/editCount'));
        $routeProvider.otherwise({redirectTo:'/index'});
    });
    return app;
});
