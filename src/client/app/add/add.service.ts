namespace app.add {
    'use strict';

    angular
        .module('app.add')
        .service('reading', reading);

    reading.$inject = ['$filter'];

    function reading($filter: ng.IFilterService) {
        var service = {
            currentDateTime: currentDateTime,
            setDateTime: setDateTime
        };
        return service;

        function currentDateTime(format: string): string {
            return $filter('date')(new Date(), format);
        }

        function setDateTime(selectedDateTime: Date, format: string): string {
            return selectedDateTime ? $filter('date')(selectedDateTime, format) : currentDateTime(format);
        }
    }
}