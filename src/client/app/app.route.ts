namespace app {
  'use strict';

  function routeConfig($locationProvider: ng.ILocationProvider, $routeProvider: ng.route.IRouteProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
      templateUrl: 'app/dashboard/dashboard.html',
      controllerAs: 'vm',
      controller: 'DashboardController'
    }).when('/add', {
      templateUrl: 'app/reading/reading.html',
      controllerAs: 'vm',
      controller: 'ReadingController'
    }).otherwise({
      redirectTo: '/'
    });
  }

  routeConfig.$inject = ['$locationProvider', '$routeProvider'];

  angular
    .module('app')
    .config(routeConfig);
}