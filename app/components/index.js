define(
    function () {
        var appModule = require('../app.js');

        appModule.controller('landingPageController', require('./landingPage/landingPage.js'));


        return appModule;
    }
);
