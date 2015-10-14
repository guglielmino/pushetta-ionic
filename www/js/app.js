'use strict';


angular.module('pushetta', [
  'ionic', 'ionic.service.core',
  'pushetta.controllers.notifications',
  'pushetta.controllers.subscriptions',
  'pushetta.controllers.featured',
  'pushetta.services.api.notifications',
  'pushetta.services.api.subscriptions',
  'pushetta.services.api.featured',
  'pushetta.services.storage',
  'ngCordova'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.tpl.html',
      controller: 'AppCtrl'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/notifications');
})

.controller('AppCtrl', function($scope, $timeout) {
  console.log("APP CTRL");
});