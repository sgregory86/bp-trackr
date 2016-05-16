namespace app.add {
    'use strict';

    angular
        .module('app.add')
        .controller('Add', Add);

    Add.$inject = ['$alert', 'dataservice', 'reading'];

    function Add($alert: any, dataservice: any, reading: any) {
        var vm = this;
        var dateFormat = 'M/dd/yy';
        var timeFormat = 'h:mm a';
        var bloodPressure = dataservice.getReadings();
        vm.date = reading.currentDateTime(dateFormat);
        vm.time = reading.currentDateTime(timeFormat);
        vm.addReading = addReading;

        function addReading(): void {
            bloodPressure.save({
                    selectedDate: reading.setDateTime(vm.selectedDate, dateFormat),
                    selectedTime: reading.setDateTime(vm.selectedTime, timeFormat),
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
                .catch(function(response: any) {
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
}