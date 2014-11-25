angular.module('MyApp')
    .controller('MainCtrl', ['BloodPressure',
        function(BloodPressure) {
            var vm = this;
            vm.readingLimit = -5;
            vm.readings = BloodPressure.query();
            vm.removeItem = function(reading) {
                vm.readings.splice(vm.readings.indexOf(reading), 1);
                reading.$delete(reading);
            };
        }
    ]);