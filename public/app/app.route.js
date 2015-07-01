(function() {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    routeConfig.$inject = ['$locationProvider', '$routeProvider'];

    function routeConfig($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: 'app/dashboard/dashboard.html',
                controllerAs: 'vm',
                controller: 'Dashboard'
            })
            .when('/add', {
                templateUrl: 'app/views/add.html',
                controllerAs: 'vm',
                controller: 'AddCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();