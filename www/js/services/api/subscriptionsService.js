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

		SubscriptionsSvc.prototype.subscribeChannel = function(channel) {

		};

		return SubscriptionsSvc;
	}])
	.service('subscriptionsSvc', ['SubscriptionsSvc', function(SubscriptionsSvc) {
		return new SubscriptionsSvc();
	}]);