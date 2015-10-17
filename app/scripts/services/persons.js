'use strict';

/**
 * @ngdoc service
 * @name testAppApp.persons
 * @description
 * # persons
 * Service in the testAppApp.
 */
angular.module('testAppApp')
  .service('Persons', function ($http) {
    this.get = function(){
       return $http.get('/persons')
    }
  });
