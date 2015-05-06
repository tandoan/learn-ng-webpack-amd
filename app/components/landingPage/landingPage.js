'use strict';

define(['angular'],
    function(angular){
        return ['$scope', 
        function($scope){
            $scope.allTheThings = [
                'dogs',
                'cats',
                'excited',
                'double excited'
            ];
            console.log($scope.allTheThings, 'all the things!')
        }];   
});