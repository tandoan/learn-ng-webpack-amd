require('./../../app.js');
require('angular');
require('angular-mocks');

describe('Controller: landingPage', function () {

    var ctrl, scope;

    beforeEach(angular.mock.module('tansapp'));


    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new(true);
        ctrl = $controller('landingPageController', {$scope: scope});
    }));

    it('should have the right length', function () {
        expect(scope.allTheThings.length).toBe(4);
    })
});
	