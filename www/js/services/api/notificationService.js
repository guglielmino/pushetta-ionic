'use strict'

angular.module('pushetta.services.api.notifications', [])
	.factory('NotificationSvc', ['$http', '$q', function($http, $q) {
		var NotificationSvc = function() {};

		NotificationSvc.prototype.getMyNotifications = function(deviceId) {
			return $http.get('http://api.pushetta.com/api/messages/my/' + deviceId + '/')
				.then(function(results) {
					return results.data;
				});
		};

		return NotificationSvc;
	}])
	.service('notificationSvc', ['NotificationSvc', function(NotificationSvc) {
		return new NotificationSvc();
	}]);