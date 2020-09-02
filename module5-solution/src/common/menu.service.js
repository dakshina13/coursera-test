(function () {
  "use strict";
  
  angular.module('common')
  .service('MenuService', MenuService);
  
  
  MenuService.$inject = ['$http', 'ApiPath','$q','$rootScope'];
  function MenuService($http, ApiPath,$q,$rootScope) {
    var service = this;
    var serverErrorEventName = 'error:activate';
    var signUpEventName='signup:success';
    service.getCategories = function () {
      return $http.get(ApiPath + '/categories.json').then(function (response) {
        return response.data;
      });
    };
  
  
    service.getMenuItems = function (category) {
      var config = {};
      if (category) {
        config.params = {'category': category};
      }
  
      return $http.get(ApiPath + '/menu_items.json', config)
      .then(function (response) {
                return response.data;
          });
    };


    service.getFavMenu=function(menuId){
      var deferred=$q.defer();
      return $http.get(ApiPath+'/menu_items/'+menuId+'.json')
          .then(function(response){
            $rootScope.$broadcast(serverErrorEventName,{on:false});
            $rootScope.$broadcast(signUpEventName,{on:true});
            return response.data;
          }) .catch(function(reason){
            $rootScope.$broadcast(serverErrorEventName,{on:true});
            console.log("Server error",reason);
            deferred.reject(reason);
            return deferred.promise;
          });
    }
  }
  })();
  