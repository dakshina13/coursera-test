(function(){
    "use strict";

    angular.module('public')
    .controller('MyInfoController',MyInfoController);

    MyInfoController.$inject=['myInfo','MenuService'];
    function MyInfoController(myInfo,MenuService){
        var $ctrl=this;
        $ctrl.myInfo=myInfo;
        $ctrl.nullInfo=true;
        $ctrl.$onInit=function(){
            if(myInfo!==null){
                $ctrl.nullInfo=false;
                $ctrl.myInfo=myInfo;
            }else{
                $ctrl.nullInfo=true;
            }
        };
       $ctrl.getFavItem=function(itemId){
            return MenuService.getFavMenu(itemId);
       };
    }
})();