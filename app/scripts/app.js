'use strict';

/**
 * @ngdoc overview
 * @name basicCalculatorApp
 * @description
 * # basicCalculatorApp
 *
 * Main module of the application.
 */
angular
  .module('basicCalculatorApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
