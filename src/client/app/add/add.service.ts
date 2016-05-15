namespace app.add {
    'use strict';

    angular
        .module('app.add')
        .service('reading', reading);

    reading.$inject = ['$filter'];

    function reading($filter) {
        var service = {
            currentDateTime: currentDateTime,
            setDateTime: setDateTime
        };
        return service;

        function currentDateTime(format) {
            return $filter('date')(new Date(), format);
        }

        function setDateTime(selectedDateTime, format) {
            return selectedDateTime ? $filter('date')(selectedDateTime, format) : currentDateTime(format);
        }
    }
}