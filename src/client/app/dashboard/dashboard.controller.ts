namespace app.dashboard {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('Dashboard', Dashboard);

    Dashboard.$inject = ['config', 'dataservice'];

    function Dashboard(config: any, dataservice: any) {
        var vm = this;
        var bloodPressure = dataservice.getReadings();
        vm.readingLimit = config.readingLimit;
        vm.readings = bloodPressure.query();
        vm.removeItem = removeItem;

        function removeItem(reading: ng.resource.IResource<any>): void {
            vm.readings.splice(vm.readings.indexOf(reading), 1);
            reading.$delete(reading);
        }
    }
}