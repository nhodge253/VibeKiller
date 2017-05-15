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
     return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=YOUR_API_KEY_HERE', {}, {
       query: {
         method:'GET',
         params:{
           location: 'Seattle,us'
         },
         isArray:false
       }
     });
   });
