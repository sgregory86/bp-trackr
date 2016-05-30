namespace app.reading {
    'use strict';

    export class ReadingController {
        static $inject = ['$location', 'config', 'dataservice', 'timeservice'];
        constructor(private $location: ng.ILocationService,
            private config: { dateFormat: string, timeFormat: string },
            private dataservice: app.core.DataService,
            private timeservice: app.core.TimeService) {}

        date = this.timeservice.currentDateTime(this.config.dateFormat);
        time = this.timeservice.currentDateTime(this.config.timeFormat);
        systolic: number;
        diastolic: number;
        selectedDate: Date;
        selectedTime: Date;

        addReading(): void {
            this.dataservice.saveReading({
                selectedDate: this.timeservice.setDateTime(this.selectedDate, this.config.dateFormat),
                selectedTime: this.timeservice.setDateTime(this.selectedTime, this.config.timeFormat),
                systolic: this.systolic,
                diastolic: this.diastolic
            });
            this.$location.path('/');
        }
    }

    angular
        .module('app.reading')
        .controller('ReadingController', ReadingController);
}