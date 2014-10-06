angular.module('MyApp')
  .controller('MainCtrl', ['$scope', 'BloodPressure',
    function($scope, BloodPressure) {
      $scope.readingLimit = -5;
      $scope.readings = BloodPressure.query();
      $scope.removeItem = function(reading) {
        $scope.readings.splice($scope.readings.indexOf(reading), 1);
        reading.$delete(reading);
      };
    }
  ]);