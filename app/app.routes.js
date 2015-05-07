'use strict';


define(
    function () {
        var appModule = require('./app');

        appModule.config(function ($routeProvider) {
            $routeProvider
                .when('/landingPage', {
                    template: require('./components/landingPage/landingPage.html'),
                    controller: require('./components/landingPage/landingPage.js')
                })
                //.when('/otherPage', {
                //    template: require('./components/otherPage/otherPage.html'),
                //    controller: require('./components/otherPage/otherPage.js')
                //});
            /* Add New Routes Above */
            $routeProvider.otherwise({redirectTo: '/landingPage'});
        });

        return appModule;

    }
);
