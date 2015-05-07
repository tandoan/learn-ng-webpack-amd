'use strict';

define(
    function () {
        return function ($scope) {
            $scope.allTheThings = [
                'other dogs',
                'other cats',
                'excited',
                'double excited'
            ];
            console.log($scope.allTheThings, 'all the things!');
        };
    });