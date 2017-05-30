'use strict';

/**
 * @ngdoc service
 * @name vibeKillerApp.angry
 * @description
 * # angry
 * Factory in the vibeKillerApp.
 */
 angular.module('vibeKillerApp')
 .factory('angry', function ($resource) {
   // Service logic
   // ...

   // Public API here
   return $resource('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLq2uamLnrhl4QZDqbxEe2wqomslcE33Ww&key=AIzaSyDOKHMiU66J5zLNcRT-mVH3THUCl009tLI', {}, {
     query: {
       method:'GET'
     }
   });
 });
