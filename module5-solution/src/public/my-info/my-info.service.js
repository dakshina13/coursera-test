(function(){
    "use strict";

    angular.module('public')
    .service('MyInfoService',MyInfoService);

    MyInfoService.$inject=['$http','ApiPath'];
    function MyInfoService($http,ApiPath){
        var service=this;

        var _user={
            _firstname:"",
            _lastname:"",
            _email:"",
            _phone:"",
            _favDish:"",
            _menuItem:""
        };

        service.setMyInfo=function(user){
            _user=user;
        };

        service.getMyInfo=function(){
            if(_user._firstname!==""){
               return _user;
            }else{
                return null;
            }
        };
        service.getFav=function(){
            return _user._favDish;
        };
    }
})();