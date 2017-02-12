namespace app.reading {
  'use strict';

  const reading = {
    templateUrl: 'app/reading/reading.html',
    controllerAs: 'vm',
    controller: 'ReadingController'
  };

  angular
    .module('app.reading')
    .component('reading', reading);
}