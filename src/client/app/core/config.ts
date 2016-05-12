namespace app.core {
    'use strict';

    var readingLimit = -5;

    var config = {
        readingLimit: readingLimit
    };

    angular
        .module('app.core')
        .value('config', config);
}