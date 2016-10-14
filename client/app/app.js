'use strict';

var angMonitorManager=angular.module('angMonitorManager', [
  'ngResource',
  'ngRoute',
  'ui.bootstrap'
]).config(['$locationProvider', '$routeProvider', 
  function($locationProvider, $routeProvider) {
    //$locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/'});
}]);

angMonitorManager.config(function (uibDatepickerConfig, uibDatepickerPopupConfig) {
    uibDatepickerConfig.startingDay = 6;
    uibDatepickerConfig.showWeeks = false;
    uibDatepickerConfig.formatDay = "dd";
    uibDatepickerConfig.formatMonth = "MM";
    uibDatepickerConfig.formatYear = "yyyy";
    uibDatepickerPopupConfig.uibDatepickerPopup = configData.dateFormat;
    uibDatepickerPopupConfig.showButtonBar = false;

});
