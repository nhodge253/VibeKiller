'use strict';

/**
 * @ngdoc service
 * @name vibeKillerApp.festive
 * @description
 * # festive
 * Factory in the vibeKillerApp.
 */
 angular.module('vibeKillerApp')
 .factory('festive', function ($resource) {
   // Service logic
   // ...

   // Public API here
   return $resource('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLq2uamLnrhl5V9coACbu7echDz9pjIUw2&key=AIzaSyDOKHMiU66J5zLNcRT-mVH3THUCl009tLI', {}, {
     query: {
       method:'GET'
     }
   });
 });
