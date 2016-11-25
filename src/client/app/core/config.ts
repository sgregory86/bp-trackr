namespace app.core {
  'use strict';

  let dateFormat = 'M/dd/yy';
  let readingLimit = -10;
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