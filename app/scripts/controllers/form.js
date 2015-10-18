'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the testAppApp
 */
angular.module('testAppApp')
  .controller('FormCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
