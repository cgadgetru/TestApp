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

    Persons.getAll(function(result){
        console.log("result",result);
        $scope.persons = result.data;

    })
  }]);
