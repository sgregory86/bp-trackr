angular.module('MyApp')
  .controller('MainCtrl', ['$scope', 'BloodPressure', function($scope, BloodPressure) {

    $scope.readings = BloodPressure.query();

  }]);