'use strict';

/**
 * @ngdoc service
 * @name VibeKiller.happy
 * @description
 * # happy
 * Factory in the VibeKiller.
 */

 angular.module('vibeKillerApp')
   .factory('happy', function ($resource) {
     // Service logic
     // ...

     // Public API here
     return $resource('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLq2uamLnrhl4x86RGi8dY1cCN-hUuvxpM&key=AIzaSyDOKHMiU66J5zLNcRT-mVH3THUCl009tLI', {}, {
       query: {
         method:'GET'
       }
     });
   });
