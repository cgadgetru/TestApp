'use strict';

/**
 * @ngdoc service
 * @name testApp.persons
 * @description
 * # persons
 * Service in the testApp.
 */
angular.module('testApp')
  .service('Persons', function ($http) {
        var cachedData;
        function getData(callback){
            if(cachedData) {
                callback(cachedData);
            } else {
                $http.get('/persons').success(function(data){
                    var result = {
                        data:convertData(data),
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
            }).uniq().value().map(function(item){
                if (item === ''){
                    return 'empty';
                }else{
                    return item;
                }
            });
        }
        function convertData(data){
            return _.chain(data).map(function(item){
                if (item.category === ''){
                    item.category = 'empty';
                    return item;
                }else{
                    return item;
                }
            }).value()
        }
        this.getAll = getData;
  });
