'use strict';

/**
 * @ngdoc service
 * @name vibeKillerApp.sad
 * @description
 * # sad
 * Factory in the vibeKillerApp.
 */
angular.module('vibeKillerApp')
.factory('sad', function ($resource) {
  // Service logic
  // ...

  // Public API here
  return $resource('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLq2uamLnrhl6RYw3jIqyO2Kawqci0AmeS&key=AIzaSyDOKHMiU66J5zLNcRT-mVH3THUCl009tLI', {}, {
    query: {
      method:'GET'
    }
  });
});
