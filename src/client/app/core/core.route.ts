namespace app.core {
  'use strict';

  function routeConfig($locationProvider: ng.ILocationProvider, $stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      .state('dashboard', {
        url: '/',
        component: 'dashboard'
      })
      .state('add', {
        url: '/add',
        component: 'reading'
      });
    $urlRouterProvider.otherwise('/');
  }

  routeConfig.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

  angular
    .module('app.core')
    .config(routeConfig);
}