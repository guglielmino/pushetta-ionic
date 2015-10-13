'use strict';

describe('notifications storage service', function() {
	var notificationStorageSvc;
	var httpBackend;

	beforeEach(module('pushetta.services.storage'));

	beforeEach(inject(function($httpBackend, _notificationStorageSvc_) {
		notificationStorageSvc = _notificationStorageSvc_;
		httpBackend = $httpBackend;
	}));


	it('should get my stored notifications', function() {

		notificationStorageSvc
			.getMyNotifications('testid')
			.then(function(result) {
				expect(result).toBeDefined();
			}, function(err) {

			});

	});

});