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
        var cachedData;
        function getData(callback,error){
            if(cachedData) {
                callback(cachedData);
            } else {
                $http.get('/persons').success(function(data){
                    var result = {
                        data:data,
                        categories:getCategory(data)
                    };
                    cachedData = result;
                    callback(result);
                });
            }
        }

        function getCategory(data){
            return _.chain(data).map(function(item){
                return item.category;
            }).uniq().value();
        }
        this.getAll = getData;
  });
