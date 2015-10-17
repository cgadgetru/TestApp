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
        $scope.persons = result.data;
        $scope.categories = result.categories;
        $scope.getClass = function(category){
            var classes = {
                category1:"success",
                category2:"info",
                category3:"warning",
                category4:"danger"
            }
            return classes[category];
        }
    })
  }]);
