'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:ApplicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the testAppApp
 */
angular.module('testAppApp')
  .controller('ApplicationCtrl',['$scope','Persons', function ($scope,Persons) {
    $scope.viewType = 'columns';

    Persons.get().success(function(result){
        console.log('persons',result);
        $scope.persons = result;
    })
  }]);
