(function() {
    'use strict';

    angular
        .module('bpTrackr')
        .config(routeConfig);

    routeConfig.$inject = ['$locationProvider', '$routeProvider'];

    function routeConfig($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/home.html',
                controllerAs: 'vm',
                controller: 'MainCtrl'
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