namespace app.core {
    'use strict';

    var dateFormat = 'M/dd/yy';
    var readingLimit = -5;
    var timeFormat = 'h:mm a';

    var config = {
        dateFormat: dateFormat,
        readingLimit: readingLimit,
        timeFormat: timeFormat
    };

    angular
        .module('app.core')
        .value('config', config);
}