// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('feedsCtrl', function($scope, $http) {

      $scope.init = function(){
      $http.get("http://ajax.googleapis.com/ajax/services/feed/load?num=100&q=http://phys.org/rss-feed/&v=1.0")
      .success(function (response) 
      {
          $scope.feeds = response.responseData.feed.entries;
          window.localStorage["entries"] = JSON.stringify(response.responseData.feed.entries);
      })
      .error(function(response)
      {
          console.log("ERROR:" + response);
          if(window.localStorage["entries"] !== undefined) {
                    $scope.feeds = JSON.parse(window.localStorage["entries"]);
                }
      });
    }
      $scope.browse = function(v) {
          window.open(v, "_system", "location=yes");
      }
}); 