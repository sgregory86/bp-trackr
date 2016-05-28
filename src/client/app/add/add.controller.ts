namespace app.add {
    'use strict';

    function AddController($alert: mgcrea.ngStrap.alert.IAlertService, config: { dateFormat: string, timeFormat: string }, dataservice: app.core.DataService, timeservice: app.core.TimeService) {
        var vm = this;
        var bloodPressure = dataservice.getReadings();
        vm.date = timeservice.currentDateTime(config.dateFormat);
        vm.time = timeservice.currentDateTime(config.timeFormat);
        vm.saveReading = saveReading;

        function saveReading(): void {
            bloodPressure.save({
                selectedDate: timeservice.setDateTime(vm.selectedDate, config.dateFormat),
                selectedTime: timeservice.setDateTime(vm.selectedTime, config.timeFormat),
                systolic: vm.systolic,
                diastolic: vm.diastolic
            }).$promise.then(function() {
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
            }).catch(function(response: any) {
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

    AddController.$inject = ['$alert', 'config', 'dataservice', 'timeservice'];

    angular
        .module('app.add')
        .controller('AddController', AddController);
}