describe('notifications section', function() {
	var scope = {};

	beforeEach(function() {
		module('pushetta.services.api');
		module('pushetta.controllers');
	});

	beforeEach(
		inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			$controller('NotificationsCtrl', {
				$scope: scope
			});
		}));

	it('should have a dummy test', inject(function() {
		expect(true).toBeTruthy();
	}));

	it('should contains notifications data', inject(function() {
		expect(scope.data).toBeDefined();
	}));

	it('should contains notifications list', inject(function() {
		expect(scope.data.notifications).toBeDefined();
	}));

});