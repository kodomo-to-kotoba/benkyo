(function() {
  'use strict';

  var settings = angular.module('app.settings');

  settings.config(configureStates);

  configureStates.$inject = ['$stateProvider'];

  function configureStates($stateProvider) {
    $stateProvider
      .state('settings', {
        url: '/settings',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html'
          },
          'content': {
            templateUrl: 'app/settings/settings.html'
          }
        }
      });
  }

})();
