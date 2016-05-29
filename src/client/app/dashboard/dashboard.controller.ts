namespace app.dashboard {
    'use strict';

    export class DashboardController {
        static $inject = ['config', 'dataservice'];
        constructor(private config: { readingLimit: number }, private dataservice: app.core.DataService) {}

        readingLimit = this.config.readingLimit;
        readings = this.dataservice.getReadings();

        removeItem(reading: ng.resource.IResource<Object>): void {
            this.dataservice.deleteReading(reading, this.readings);
        }
    }

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);
}