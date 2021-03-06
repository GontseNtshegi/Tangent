'use strict';

/**
 * @ngdoc overview
 * @name DHubAgile
 * @description
 * # DHubAgile
 *
 * Main module of the application.
 */
angular
  .module('DHubAgile', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngStorage'
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
      .when('/CRUD', {
        templateUrl: 'views/CRUD.html',
        controller: 'CrudCtrl',
        controllerAs: 'Crud'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
