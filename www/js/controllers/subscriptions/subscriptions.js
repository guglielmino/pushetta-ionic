'use strict';

angular.module('pushetta')
  .config(function config($stateProvider) {

    $stateProvider
      .state('app.subscriptions', {
        url: '/subscriptions',
        views: {
          'menuContent': {
            templateUrl: 'js/controllers/subscriptions/subscriptions.tpl.html',
            controller: 'SubscriptionsCtrl'
          },
          data: {
            pageTitle: 'Subscribed channel'
          }
        }
      });
  });

angular.module('pushetta.controllers.subscriptions', [])

.controller('SubscriptionsCtrl', ['$scope', 'subscriptionsSvc', function($scope, subscriptionsSvc) {

  $scope.data = {};

  $scope.data.subscriptions = [];

  subscriptionsSvc.getMySubscriptions('51605362-6801-4E2D-ADBF-045D7B8B04D2')
    .then(function(results) {
      $scope.data.subscriptions = results;
    });

  $scope.unsubscribe = function(subscription) {
    alert("unsubscribe " + subscription.id);
  };

}]);