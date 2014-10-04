angular.module('MyApp')
  .controller('AddCtrl', function($scope, $alert, BloodPressure) {
    $scope.addReading = function() {
      BloodPressure.save({ systolic: $scope.systolic, diastolic: $scope.diastolic }).$promise
        .then(function() {
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
          $scope.systolic = '';
          $scope.diastolic = '';
          $scope.addForm.$setPristine();
          $alert({
            content: response.data.message,
            animation: 'fadeZoomFadeDown',
            type: 'info',
            duration: 3
          });
        });
    };
  });