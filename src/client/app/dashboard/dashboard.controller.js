(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('Dashboard', Dashboard);

    Dashboard.$inject = ['config', 'dataservice'];

    function Dashboard(config, dataservice) {
        var vm = this,
            bloodPressure = dataservice.getReadings();
        vm.readingLimit = config.readingLimit;
        vm.readings = bloodPressure.query();
        vm.removeItem = removeItem;

        function removeItem(reading) {
            vm.readings.splice(vm.readings.indexOf(reading), 1);
            reading.$delete(reading);
        }
    }
})();