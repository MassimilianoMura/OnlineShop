'use strict';

angular
  .module('projectsApp', [
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
      .when('/cart', {
        templateUrl: 'views/shoppingcart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
