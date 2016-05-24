namespace app.add {
    'use strict';

    export class Reading {
        static $inject = ['$filter'];
        constructor(private $filter: ng.IFilterService) {}

        currentDateTime(format: string): string {
            return this.$filter('date')(new Date(), format);
        }

        setDateTime(selectedDateTime: Date, format: string): string {
            return selectedDateTime ? this.$filter('date')(selectedDateTime, format) : this.currentDateTime(format);
        }
    }

    angular
        .module('app.add')
        .service('reading', Reading);
}