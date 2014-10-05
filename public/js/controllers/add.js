angular.module('MyApp')
  .controller('AddCtrl', function($scope, $alert, BloodPressure) {

    $scope.date = moment(new Date()).format("M/DD/YY");

    $scope.setDate = function() {
      return $scope.selectedDate ? moment($scope.selectedDate).format("M/DD/YY") : $scope.date;
    };

    $scope.addReading = function() {
      BloodPressure.save({ selectedDate: $scope.setDate(), systolic: $scope.systolic, diastolic: $scope.diastolic }).$promise
        .then(function() {
          $scope.date = '';
          $scope.selectedDate = '';
          $scope.systolic = '';
          $scope.diastolic = '';
          $scope.addForm.$setPristine();
          $alert({
            content: 'Blood pressure has been added.',
            animation: 'fadeZoomFadeDown',
            placement: 'top-right',
            type: 'info',
            duration: 3
          });
        })
        .catch(function(response) {
          $scope.date = '';
          $scope.selectedDate = '';
          $scope.systolic = '';
          $scope.diastolic = '';
          $scope.addForm.$setPristine();
          $alert({
            content: response.data.message,
            animation: 'fadeZoomFadeDown',
            placement: 'top-right',
            type: 'info',
            duration: 3
          });
        });
    };
  });