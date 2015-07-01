(function() {
    'use strict';

    var core = angular.module('bpTrackr.core');

    var readingLimit = -5;

    var config = {
        readingLimit: readingLimit
    };

    core.value('config', config);
})();