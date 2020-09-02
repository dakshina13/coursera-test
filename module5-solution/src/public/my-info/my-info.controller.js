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
                console.log("My INfo ",$ctrl.myInfo);
            }else{
                $ctrl.nullInfo=true;
            }
            console.log("Null Info",$ctrl.nullInfo);
        };
       $ctrl.getFavItem=function(itemId){
           console.log("Inside get fav item",itemId);
            return MenuService.getFavMenu(itemId);
       };
    }
})();