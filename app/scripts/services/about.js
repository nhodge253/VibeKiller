'use strict';

/**
 * @ngdoc service
 * @name vibeKillerApp.about
 * @description
 * # about
 * Factory in the vibeKillerApp.
 */
angular.module('vibeKillerApp')
  .factory('about', function () {
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
