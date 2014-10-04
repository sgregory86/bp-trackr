angular.module('MyApp')
  .controller('MainCtrl', ['$scope', 'BloodPressure',
    function($scope, BloodPressure) {
      $scope.readingLimit = -5;
      $scope.readings = BloodPressure.query();
    }
  ]);