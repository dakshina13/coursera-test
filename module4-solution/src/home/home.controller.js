(function(){
    'use strict';

    angular.module('MenuApp')
    .controller('HomeController',HomeController);

    HomeController.$inject=[];
    function HomeController(){
        var ctrl=this;
        ctrl.showHome=true;
        ctrl.onShowSpinner=function(){
            ctrl.showHome=false;
        }
    }
})();