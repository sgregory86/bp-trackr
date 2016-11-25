namespace app {
  'use strict';

  function routeConfig($locationProvider: ng.ILocationProvider, $routeProvider: ng.route.IRouteProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
      template: '<dashboard></dashboard>'
    }).when('/add', {
      template: '<reading></reading>'
    }).otherwise({
      redirectTo: '/'
    });
  }

  routeConfig.$inject = ['$locationProvider', '$routeProvider'];

  angular
    .module('app')
    .config(routeConfig);
}