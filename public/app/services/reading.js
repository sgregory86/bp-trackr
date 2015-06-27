(function() {
    'use strict';

    angular
        .module('bpTrackr')
        .factory('BloodPressure', BloodPressure);

    BloodPressure.$inject = ['$resource'];

    function BloodPressure($resource) {
        return $resource('/api/readings/:_id');
    }
})();