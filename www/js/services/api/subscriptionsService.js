'use strict'

angular.module('pushetta.services.api.subscriptions', [])
	.factory('SubscriptionsSvc', ['$http', '$q', function($http, $q) {
		var SubscriptionsSvc = function() {};

		SubscriptionsSvc.prototype.getMySubscriptions = function(deviceId) {
			return $http.get('http://api.pushetta.com/api/subscriptions/' + deviceId + '/')
				.then(function(results) {
					return results.data;
				});
		};

		SubscriptionsSvc.prototype.subscribeChannel = function(channel, subtype, deviceId, token) {
			return $http.post('http://api.pushetta.com/api/channel/subscription/' + channel + '/')
				.then(function(results) {
					return results.data;
				});
			/*
				Payload
				{
					sub_type: "ios"|"android" (check server side)
					device_id: "1234556"
					token: "aaaasddffggggg"
				}

			*/
		};

		return SubscriptionsSvc;
	}])
	.service('subscriptionsSvc', ['SubscriptionsSvc', function(SubscriptionsSvc) {
		return new SubscriptionsSvc();
	}]);