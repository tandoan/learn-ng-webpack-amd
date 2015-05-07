define(['angular', './spinner.css'], function (angular) {

    angular.module('nfGraphics', [])
        .directive('spinner', function () {
            return {
                template: require('./spinner.html'),
                scope: {
                    size: '@'
                },
                restrict: 'E'
            }
        })
});