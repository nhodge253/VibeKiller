'use strict';

/**
 * @ngdoc function
 * @name vibeKillerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vibeKillerApp
 */
angular.module('vibeKillerApp')
.controller('MainCtrl', function ($scope, happy) {
   $scope.happy = happy.query();
 });
