namespace app.core {
  'use strict';

  export class TimeService {
    static $inject = ['$filter'];
    constructor(private $filter: ng.IFilterService) {}

    currentDateTime(format: string): string {
      return this.$filter('date')(new Date(), format);
    }

    setDateTime(selectedDateTime: Date, format: string): string {
      return selectedDateTime ? this.$filter('date')(selectedDateTime, format) : this.currentDateTime(format);
    }
  }

  angular
    .module('app.core')
    .service('timeservice', TimeService);
}