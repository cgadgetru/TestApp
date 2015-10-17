'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAppApp
 */
angular.module('testAppApp')
  .controller('MainCtrl', function ($scope,$http) {
        $scope.get = function(){
            $http.get('/phones')
                .success(function(result){
                    console.log("result",result);
                })
                .error(function(error){
                    console.log("error",error);
                });
        }
  });
