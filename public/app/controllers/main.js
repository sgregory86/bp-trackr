(function() {
    'use strict';

    angular
        .module('bpTrackr')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['BloodPressure'];

    function MainCtrl(BloodPressure) {
        var vm = this;
        vm.readingLimit = -5;
        vm.readings = BloodPressure.query();
        vm.removeItem = removeItem;

        function removeItem(reading) {
            vm.readings.splice(vm.readings.indexOf(reading), 1);
            reading.$delete(reading);
        }
    }
})();