(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$resource'];

    function dataservice($resource) {
        var service = {
            getReadings: getReadings
        };
        return service;

        function getReadings() {
            return $resource('/api/readings/:_id');
        }
    }
})();