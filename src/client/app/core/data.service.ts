namespace app.core {
    'use strict';

    export class DataService {
        static $inject = ['$resource'];
        constructor(private $resource: ng.resource.IResourceService) {}

        getReadings(): ng.resource.IResourceClass<any> {
            return this.$resource('/api/readings/:_id');
        }

        deleteReading(reading: ng.resource.IResource<any> , readings: any): ng.IPromise<ng.resource.IResourceService> {
            readings.splice(readings.indexOf(reading), 1);
            return reading.$delete(reading);
        }
    }

    angular
        .module('app.core')
        .service('dataservice', DataService);
}