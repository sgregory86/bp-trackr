namespace app.core {
  'use strict';

  const dateFormat = 'M/dd/yy';
  const readingLimit = -15;
  const timeFormat = 'h:mm a';

  const config = {
    dateFormat: dateFormat,
    readingLimit: readingLimit,
    timeFormat: timeFormat
  };

  angular
    .module('app.core')
    .value('config', config);
}