(function() {
    'use strict';

    angular
        .module('bpTrackr')
        .filter('reverse', reverse);

    function reverse() {
        return function(items) {
            return items.slice().reverse();
        };
    }
})();