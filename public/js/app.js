angular.module('MyApp', ['ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap'])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider 
      .when('/', {
        templateUrl: 'js/views/home.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    }
  ]);