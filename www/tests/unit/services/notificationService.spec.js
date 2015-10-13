'use strict';

describe('notifications net service', function() {
	var scope = {};
	var notificationSvc, httpBackend;

	beforeEach(module('pushetta.services.api'));

	beforeEach(inject(function(_notificationSvc_, $httpBackend) {
		notificationSvc = _notificationSvc_;
		httpBackend = $httpBackend;
	}));


	it('should get my notifications', function() {

		var responseJson = [{
			"id": 180457,
			"body": "WOW! Another snapshot in Self-O-Matic history!",
			"date_created": "2015-09-08T14:54:51",
			"expire": "2015-10-08T14:54:51",
			"channel": {
				"id": 503,
				"name": "selfomatic",
				"image": "http://www.pushetta.com/uploads/channel_media/756da4c4163547279773de8c6607496b.png"
			},
			"preview_url": null
		}, {
			"id": 179746,
			"body": "WOW! Another snapshot in Self-O-Matic history!",
			"date_created": "2015-09-07T15:40:23",
			"expire": "2015-10-07T15:40:23",
			"channel": {
				"id": 503,
				"name": "selfomatic",
				"image": "http://www.pushetta.com/uploads/channel_media/756da4c4163547279773de8c6607496b.png"
			},
			"preview_url": null
		}, {
			"id": 179440,
			"body": "WOW! Another snapshot in Self-O-Matic history!",
			"date_created": "2015-09-07T10:55:13",
			"expire": "2015-10-07T10:55:13",
			"channel": {
				"id": 503,
				"name": "selfomatic",
				"image": "http://www.pushetta.com/uploads/channel_media/756da4c4163547279773de8c6607496b.png"
			},
			"preview_url": null
		}, {
			"id": 179401,
			"body": "WOW! Another snapshot in Self-O-Matic history!",
			"date_created": "2015-09-07T10:17:49",
			"expire": "2015-10-07T10:17:49",
			"channel": {
				"id": 503,
				"name": "selfomatic",
				"image": "http://www.pushetta.com/uploads/channel_media/756da4c4163547279773de8c6607496b.png"
			},
			"preview_url": null
		}];

		var deviceId = '3ca38ae5-bc09-48c2-8d6a-dcf7acf500dd';
		httpBackend.expect('GET', 'http://api.pushetta.com/api/messages/my/' + deviceId + '/')
			.respond(200, responseJson);

		notificationSvc.getMyNotifications(deviceId)
			.then(function(results) {


				expect(results).toBeDefined();
				expect(results.length).toEqual(4);
			});

		httpBackend.flush();
	});

});