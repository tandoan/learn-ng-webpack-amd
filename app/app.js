'use strict';

define(
    [
        'angular',
        'angular-route'
    ],

    function(angular,ngRoute){

        var appName = 'tansapp',
            appModule = angular
                .module(appName, ['ngRoute'])
                .controller('landingPageController', require('./components/landingPage/landingPage.js' ));
                

        angular.element(document).ready(function () {
            angular.bootstrap(document, [appName], {
                //strictDi: true
            });
        });
        return appModule;
    }
);
