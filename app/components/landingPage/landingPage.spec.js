define([
	
	'./../../app.js',
	'./landingPage',
	'angular',
	'angular-mocks',
	], function(appModule,landingPageController){

console.log(appModule);
console.log(landingPageController);

		describe('Controller: landingPage', function(){

			var ctrl, scope;

			// beforeEach(angular.mock.module(landingPageController));
			// beforeEach(angular.mock.module(appModule));
			beforeEach(angular.mock.module('tansapp'));


			beforeEach(inject(function($rootScope,$controller){
				scope = $rootScope.$new(true);
				ctrl = $controller('landingPageController', {$scope:scope});
			}));

			it('should have the right length', function(){
				expect(scope.allTheThings.length).toBe(5);
			})
		})		
	})