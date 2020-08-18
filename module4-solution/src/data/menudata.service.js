(function(){
    'use strict';
    angular.module('data')
    .service('MenuDataService',MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject=['$http','ApiBasePath'];
    function MenuDataService($http,ApiBasePath){
        var service=this;
        service.getAllCategories=function(){
            return $http({
                method:"GET",
                url:(ApiBasePath+"/categories.json")
            })
            .then(function(response){
                return response.data;
            })
        };
        service.nameOfCategory=function(categoryShortName){
            return $http({
                method:"GET",
                url:(ApiBasePath+"/categories.json")
            })
            .then(function(response){
                var list=response.data;
                var i;
                var catName;
                for(i=0;i<list.length;i++){
                    if(list[i].short_name===categoryShortName){
                        catName=list[i].name;
                    }
                }
                return catName;
            })
        };
        service.getItemsForCategory=function(categoryShortName){
            return $http({
                method:"GET",
                url:(ApiBasePath+"/menu_items.json?category="+categoryShortName)
            })
            .then(function success(response){
                return response.data.menu_items;
            })
        };
    }
})();