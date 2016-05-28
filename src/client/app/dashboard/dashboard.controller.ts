namespace app.dashboard {
    'use strict';

    export class DashboardController {
        static $inject = ['config', 'dataservice'];
        constructor(private config: { readingLimit: number }, private dataservice: app.core.DataService) {}

        bloodPressure = this.dataservice.getReadings();
        readingLimit = this.config.readingLimit;
        readings = this.bloodPressure.query();

        removeItem(reading: ng.resource.IResource<any>): void {
            this.dataservice.deleteReading(reading, this.readings);
        }
    }

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);
}