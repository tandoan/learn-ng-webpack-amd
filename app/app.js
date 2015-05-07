'use strict';

define(
    [
        'angular',
        'angular-route',
        './shared'    
    ],

    function(angular,ngRoute,appRoutes){

        var appName = 'tansapp',
            appModule = angular
                .module(appName, ['ngRoute', 'nfGraphics'])
                .controller('landingPageController', require('./components/landingPage/landingPage.js' ));

                

        angular.element(document).ready(function () {
            angular.bootstrap(document, [appName], {
                //strictDi: true
            });
        });
        return appModule;
    }
);
