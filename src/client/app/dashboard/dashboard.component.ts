namespace app.dashboard {
  'use strict';

  let dashboard = {
    templateUrl: 'app/dashboard/dashboard.html',
    controllerAs: 'vm',
    controller: 'DashboardController'
  };

  angular
    .module('app.dashboard')
    .component('dashboard', dashboard);
}