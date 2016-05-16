namespace app.core {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$resource'];

    function dataservice($resource: ng.resource.IResourceService) {
        var service = {
            getReadings: getReadings
        };
        return service;

        function getReadings(): ng.resource.IResourceClass<any> {
            return $resource('/api/readings/:_id');
        }
    }
}