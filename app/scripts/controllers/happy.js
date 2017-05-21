'use strict';

/**
 * @ngdoc function
 * @name vibeKillerApp.controller:HappyCtrl
 * @description
 * # HappyCtrl
 * Controller of the vibeKillerApp
 */


function init() {
    window.initGapi(); // Calls the init function defined on the window
}

angular.module('vibeKillerApp')
  .controller('HappyCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
