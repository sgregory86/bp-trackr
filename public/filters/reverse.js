(function() {
    'use strict';

    angular
        .module('bpTracker')
        .filter('reverse', reverse);

    function reverse() {
        return function(items) {
            return items.slice().reverse();
        };
    }
})();