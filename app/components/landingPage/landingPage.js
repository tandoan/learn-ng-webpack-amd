'use strict';

define(
    function(){
        return  function($scope){
            $scope.allTheThings = [
                'dogs',
                'cats',
                'excited',
                'double excited'
            ];
            console.log($scope.allTheThings, 'all the things!')
        };   
});