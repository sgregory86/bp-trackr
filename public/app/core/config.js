(function() {
    'use strict';

    var core = angular.module('app.core');

    var readingLimit = -5;

    var config = {
        readingLimit: readingLimit
    };

    core.value('config', config);
})();