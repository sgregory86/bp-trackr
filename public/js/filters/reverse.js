angular.module('MyApp')
  .filter('reverse', function() {
    return function(items) {
      return items.slice().reverse();
    };
});