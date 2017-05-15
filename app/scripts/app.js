'use strict';

/**
 * @ngdoc overview
 * @name VibeKiller
 * @description
 * # VibeKiller
 *
 * Main module of the application.
 */
angular
  .module('vibeKillerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/happy', {
        templateUrl: 'views/happy.html',
        controller: 'HappyCtrl',
        controllerAs: 'happy'
      })
      .when('/sad', {
        templateUrl: 'views/sad.html',
        controller: 'SadCtrl',
        controllerAs: 'sad'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
