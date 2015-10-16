'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:ApplicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the testAppApp
 */
angular.module('testAppApp')
  .controller('ApplicationCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
