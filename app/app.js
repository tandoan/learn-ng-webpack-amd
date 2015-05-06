'use strict';

define(
    [
        'angular',
        'angular-route',
        './components/landingPage/landingPage.js',
        './components/landingPage/landingPage.html'     
    ],

    function(angular,ngRoute,landingPageController,landingPageHTML){

        var appName = 'tansapp',
            appModule = angular
                .module(appName, ['ngRoute'])
                .controller('landingPageController', landingPageController)
                .config(function($routeProvider){
                    $routeProvider.when('/landingPage', {
                        template: landingPageHTML,
                        controller: landingPageController
                    });
                    /* Add New Routes Above */
                    $routeProvider.otherwise({redirectTo: '/landingPage'});
                })


        angular.element(document).ready(function () {
            angular.bootstrap(document, [appName], {
                //strictDi: true
            });
        });
        return appModule;
    }
);
