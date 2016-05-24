namespace app.core {
    'use strict';

    export class DataService {
        static $inject = ['$resource'];
        constructor(private $resource: ng.resource.IResourceService) {}

        getReadings(): ng.resource.IResourceClass<any> {
            return this.$resource('/api/readings/:_id');
        }
    }

    angular
        .module('app.core')
        .service('dataservice', DataService);
}