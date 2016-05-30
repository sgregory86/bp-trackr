namespace app.core {
    'use strict';

    export class DataService {
        static $inject = ['$resource'];
        constructor(private $resource: ng.resource.IResourceService) {}

        getResource(): ng.resource.IResourceClass<Object> {
            return this.$resource('/api/readings/:_id');
        }

        getReadings(): Object {
            var reading = this.getResource();
            return reading.query();
        }

        saveReading(item: Object): Object {
            var reading = this.getResource();
            return reading.save(item);
        }

        deleteReading(reading: ng.resource.IResource<Object>, readings: any): ng.IPromise<ng.resource.IResourceService> {
            readings.splice(readings.indexOf(reading), 1);
            return reading.$delete(reading);
        }
    }

    angular
        .module('app.core')
        .service('dataservice', DataService);
}