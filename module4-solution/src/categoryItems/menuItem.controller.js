(function(){
    'use strict';

    angular.module('MenuApp')
    .controller('MenuItemController',MenuItemController);

    MenuItemController.$inject=['$element'];
    function MenuItemController($element){
        var ctrl=this;
        ctrl.clickCounter=[];
        ctrl.$onInit=function(){
            var i;
            for (i=0;i<ctrl.items.length;i++){
                var c=false;
                ctrl.clickCounter.push(c);
            }
        }
        ctrl.changeItemState=function(itemIndex){
            if(ctrl.clickCounter[itemIndex]===true){
                ctrl.clickCounter[itemIndex]=false;
            }else{
                ctrl.clickCounter[itemIndex]=true;
            }
        }
    }
})();