(function(){
    "use strict";

    angular.module('public')
    .controller('FavController',FavController);

    FavController.$inject=['ApiPath'];
    function FavController(ApiPath){
        var $ctrl=this;
        $ctrl.basePath = ApiPath;
        $ctrl.$onInit=function(){
            console.log("Menu Item",$ctrl.menuItem);
        };
    }
})();