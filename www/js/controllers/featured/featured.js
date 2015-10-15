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

appModule('pushetta.controllers')

.controller('FeaturedCtrl', [
  '$scope',
  '$controller',
  'featuredSvc',
  'channelSearchSvc',
  function($scope, $controller, featuredSvc, channelSearchSvc) {

    // Base controller
    var baseInstance = $controller('CommonCtrl', {
      $scope: $scope
    });

    function displayResults(results) {
      $scope.data.featured = results;
    }

    function getFeatured() {
      featuredSvc.getFeaturedChannels('51605362-6801-4E2D-ADBF-045D7B8B04D2')
        .then(displayResults);
    }

    $scope.data = {};

    $scope.data.searchText = "";
    $scope.$watch('data.searchText', function() {
      if ($scope.data.searchText) {

        channelSearchSvc
          .search($scope.data.searchText)
          .then(function(results) {
            if ($scope.data.searchText &&
              results &&
              results.length > 0) {
              displayResults(results);
            } else {
              getFeatured();
            }
          });
      }
    });

    $scope.data.featured = [];

    getFeatured();

  }

]);