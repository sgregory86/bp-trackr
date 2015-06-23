(function() {
    'use strict';

    angular
        .module('bpTracker')
        .config(routeConfig);

    routeConfig.$inject = ['$locationProvider', '$routeProvider'];

    function routeConfig($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controllerAs: 'vm',
                controller: 'MainCtrl'
            })
            .when('/add', {
                templateUrl: 'views/add.html',
                controllerAs: 'vm',
                controller: 'AddCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();