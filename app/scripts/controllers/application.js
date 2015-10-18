'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:ApplicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('ApplicationCtrl',['$scope','Persons', function ($scope,Persons) {
    $scope.loading = true;
    $scope.viewType = 'columns';
    Persons.getAll(function(result){

        $scope.loading = false;
        $scope.persons = result.data;
        $scope.categories = result.categories;
        $scope.getClass = function(category){
            var classes = {
                category1:"success",
                category2:"info",
                category3:"warning",
                'empty':"danger"
            };
            return classes[category];
        };

    })
  }]);
