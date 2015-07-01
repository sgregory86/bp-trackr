(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('Dashboard', Dashboard);

    Dashboard.$inject = ['BloodPressure', 'config'];

    function Dashboard(BloodPressure, config) {
        var vm = this;
        vm.readingLimit = config.readingLimit;
        vm.readings = BloodPressure.query();
        vm.removeItem = removeItem;

        function removeItem(reading) {
            vm.readings.splice(vm.readings.indexOf(reading), 1);
            reading.$delete(reading);
        }
    }
})();