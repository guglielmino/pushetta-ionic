'use strict';

angular.module('pushetta')
  .config(function config($stateProvider) {

    $stateProvider
      .state('app.featured', {
        url: '/featured',
        views: {
          'menuContent': {
            templateUrl: 'js/controllers/featured/featured.tpl.html',
            controller: 'FeaturedCtrl'
          },
          data: {
            pageTitle: 'Featured'
          }
        }
      });
  });

angular.module('pushetta.controllers.featured', [])

.controller('FeaturedCtrl', ['$scope', 'featuredSvc', function($scope, featuredSvc) {

  $scope.data = {};

  $scope.data.featured = [];

  featuredSvc.getFeaturedChannels('51605362-6801-4E2D-ADBF-045D7B8B04D2')
    .then(function(results) {
      $scope.data.featured = results;
    });

}]);