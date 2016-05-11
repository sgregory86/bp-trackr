namespace app.filters {
    'use strict';

    angular
        .module('app.filters')
        .filter('reverse', reverse);

    function reverse() {
        return function(items) {
            return items.slice().reverse();
        };
    }
}