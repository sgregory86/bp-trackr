namespace app.core {
  'use strict';

  let dateFormat = 'M/dd/yy';
  let readingLimit = -15;
  let timeFormat = 'h:mm a';

  let config = {
    dateFormat: dateFormat,
    readingLimit: readingLimit,
    timeFormat: timeFormat
  };

  angular
    .module('app.core')
    .value('config', config);
}