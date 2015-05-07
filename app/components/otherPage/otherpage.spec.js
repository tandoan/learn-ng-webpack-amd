describe('Controller: otherPage', function () {

    var ctrl, scope;

    beforeEach(angular.mock.module('tansapp'));


    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new(true);
        ctrl = $controller('otherPageController', {$scope: scope});
    }));

    it('should have the right length', function () {
        expect(scope.allTheThings[0]).toEqual('other dogs');
    });
});