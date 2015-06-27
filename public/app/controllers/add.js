(function() {
    'use strict';

    angular
        .module('bpTrackr')
        .controller('AddCtrl', AddCtrl);

    AddCtrl.$inject = ['$alert', 'BloodPressure'];

    function AddCtrl($alert, BloodPressure) {

        var vm = this;
        vm.date = moment().format("M/DD/YY");
        vm.time = moment().format("h:mm a");
        vm.setDate = setDate;
        vm.setTime = setTime;
        vm.addReading = addReading;

        function setDate() {
            return vm.selectedDate ? moment(vm.selectedDate).format("M/DD/YY") : vm.date;
        }

        function setTime() {
            return vm.selectedTime ? moment(vm.selectedTime).format("h:mm a") : vm.time;
        }

        function addReading() {
            BloodPressure.save({
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