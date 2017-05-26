'use strict';

/**
 * @ngdoc service
 * @name vibeKillerApp.sad
 * @description
 * # sad
 * Factory in the vibeKillerApp.
 */
angular.module('vibeKillerApp')
  .factory('sad', function () {
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
