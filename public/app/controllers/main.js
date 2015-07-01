(function() {
    'use strict';

    angular
        .module('bpTrackr')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['BloodPressure', 'config'];

    function MainCtrl(BloodPressure, config) {
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