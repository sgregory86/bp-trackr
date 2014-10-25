angular.module('MyApp')
    .factory('BloodPressure', ['$resource',
        function($resource) {
            return $resource('/api/readings/:_id');
        }
    ]);