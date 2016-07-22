// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic','ngCordova', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])

.run(function($ionicPlatform) {
	"use strict";

  $ionicPlatform.ready(function() {
		var notificationOpenedCallback = function(jsonData) {
	    console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
	  };
	  window.plugins.OneSignal.init("d21a28d3-1faf-4625-ba5e-7cfc4429dd40",
	                                 {googleProjectNumber: "45309038193"},
	                                 notificationOpenedCallback);
	  window.plugins.OneSignal.enableInAppAlertNotification(true);

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.filter('trustAsResourceUrl', ['$sce', function($sce) {
	"use strict";
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}]);
