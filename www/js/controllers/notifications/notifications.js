'use strict';

angular.module('pushetta')
  .config(function config($stateProvider) {

    $stateProvider
      .state('app.notifications', {
        url: '/notifications',
        views: {
          'menuContent': {
            templateUrl: 'js/controllers/notifications/notifications.tpl.html',
            controller: 'NotificationsCtrl'
          },
          data: {
            pageTitle: 'Notifications'
          }
        }
      });
  });

angular.module('pushetta.controllers.notifications', [])

.controller('NotificationsCtrl', ['$scope', 'notificationSvc', function($scope, notificationSvc) {

  $scope.data = {};

  $scope.data.notifications = [];

  notificationSvc.getMyNotifications('51605362-6801-4E2D-ADBF-045D7B8B04D2')
    .then(function(results) {
      $scope.data.notifications = results;
    });

  $scope.delete = function(notification) {
    alert(notification.id);
  };

}]);