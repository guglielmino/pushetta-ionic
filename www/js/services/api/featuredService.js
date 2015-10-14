'use strict'

angular.module('pushetta.services.api.featured', [])
	.factory('FeaturedSvc', ['$http', '$q', function($http, $q) {
		var FeaturedSvc = function() {};

		FeaturedSvc.prototype.getFeaturedChannels = function(deviceId) {
			return $http.get('http://api.pushetta.com/api/channels/suggestions/' + deviceId + '/')
				.then(function(results) {
					return results.data;
				});
		};

		return FeaturedSvc;
	}])
	.service('featuredSvc', ['FeaturedSvc', function(FeaturedSvc) {
		return new FeaturedSvc();
	}]);