'use strict';

require(['./app'],
    function(appModule){
       
        appModule.config(function($routeProvider){
            
            /* Add New Routes Above */
            $routeProvider.otherwise({redirectTo: '/landingPage'});
        });
    }
);
