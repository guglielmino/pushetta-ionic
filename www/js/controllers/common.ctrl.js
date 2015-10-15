'use strict'

appModule('pushetta.controllers')
	.controller('CommonCtrl', function($scope) {
		$scope.subscribe = function(channel) {
			alert('subscribe ' + channel.name);
		};


	});