(function() {
    'use strict';

    angular
        .module('app.add')
        .controller('Add', Add);

    Add.$inject = ['$alert', '$filter', 'dataservice'];

    function Add($alert, $filter, dataservice) {
        var vm = this;
        var bloodPressure = dataservice.getReadings();
        vm.date = $filter('date')(new Date(), 'M/dd/yy');
        vm.time = $filter('date')(new Date(), 'h:mm a');
        vm.setDate = setDate;
        vm.setTime = setTime;
        vm.addReading = addReading;

        function setDate() {
            return vm.selectedDate ? $filter('date')(vm.selectedDate, 'M/dd/yy') : vm.date;
        }

        function setTime() {
            return vm.selectedTime ? $filter('date')(vm.selectedTime, 'h:mm a') : vm.time;
        }

        function addReading() {
            bloodPressure.save({
                    selectedDate: vm.setDate(),
                    selectedTime: vm.setTime(),
                    systolic: vm.systolic,
                    diastolic: vm.diastolic
                }).$promise
                .then(function() {
                    vm.date = '';
                    vm.time = '';
                    vm.selectedDate = '';
                    vm.selectedTime = '';
                    vm.systolic = '';
                    vm.diastolic = '';
                    $alert({
                        content: 'Blood pressure has been added.',
                        animation: 'fadeZoomFadeDown',
                        placement: 'top-right',
                        type: 'info',
                        duration: 3
                    });
                })
                .catch(function(response) {
                    vm.date = '';
                    vm.time = '';
                    vm.selectedDate = '';
                    vm.selectedTime = '';
                    vm.systolic = '';
                    vm.diastolic = '';
                    $alert({
                        content: response.data.message,
                        animation: 'fadeZoomFadeDown',
                        placement: 'top-right',
                        type: 'info',
                        duration: 3
                    });
                });
        }
    }
})();