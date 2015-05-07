require(
	[
		'../app.js',
		'./landingPage/landingPage.js',
		'./landingPage/landingPage.html'
	],
    function(appModule, ctrl, template){
        var appModule = require('../app.js');

        appModule.controller('landingPageController', ctrl)
        .config(function($routeProvider){
                $routeProvider.when('/landingPage', {
                    template: template,
                    controller: ctrl
                });
               
            })

        return appModule;
    }
);
