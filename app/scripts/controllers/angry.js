'use strict';

/**
 * @ngdoc function
 * @name vibeKillerApp.controller:AngryCtrl
 * @description
 * # AngryCtrl
 * Controller of the vibeKillerApp
 */
 function init() {
     window.initGapi(); // Calls the init function defined on the window
 }

 angular.module('vibeKillerApp')
   .controller('AngryCtrl', function ($scope, angry,$sce) {
     $scope.angryvids=angry.query();
     $scope.angryvids.$promise.then(function(data){
       var randomIndex = Math.floor(Math.random()*data.items.length); // randomizes the api video id
     		var embedCode = '<iframe ng-if="currentVideo" width="580" height="350" src="https://www.youtube.com/embed/' + data.items[randomIndex].snippet.resourceId.videoId + '" frameborder="0" allowfullscreen></iframe>'; // iframe embed video
     		$scope.currentVideo = $sce.trustAsHtml(embedCode); // sce to trust the html and iframe
     		console.log("set current video to: " + $scope.currentVideo); // console log current video that is displayed
         console.log(data.items[randomIndex].snippet.resourceId.videoId); // console log current video id
         copyRandomIndex = randomIndex; // grabs the first index when random the first time
     });

   });
