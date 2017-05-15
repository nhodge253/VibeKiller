'use strict';

/**
 * @ngdoc service
 * @name vibeKillerApp.happy
 * @description
 * # happy
 * Factory in the vibeKillerApp.
 */
angular.module('vibeKillerApp')
  .factory('happy', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
