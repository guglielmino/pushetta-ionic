'use strict'

angular.module('pushetta.services.api.search', [])
	.factory('ChannelSearchSvc', ['$http', '$q', function($http, $q) {
		var ChannelSearchSvc = function() {};

		ChannelSearchSvc.prototype.search = function(keyword) {
			return $http.get('http://api.pushetta.com/api/channels/search?q=' + keyword + '/')
				.then(function(results) {
					return results.data.results;
				});
		};

		return ChannelSearchSvc;
	}])
	.service('channelSearchSvc', ['ChannelSearchSvc', function(ChannelSearchSvc) {
		return new ChannelSearchSvc();
	}]);