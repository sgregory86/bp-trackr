namespace app {
    'use strict';

    function routeConfig($locationProvider: ng.ILocationProvider, $routeProvider: ng.route.IRouteProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.when('/', {
            templateUrl: 'app/dashboard/dashboard.html',
            controllerAs: 'vm',
            controller: 'Dashboard'
        }).when('/add', {
            templateUrl: 'app/add/add.html',
            controllerAs: 'vm',
            controller: 'Add'
        }).otherwise({
            redirectTo: '/'
        });
    }

    routeConfig.$inject = ['$locationProvider', '$routeProvider'];

    angular
        .module('app')
        .config(routeConfig);
}