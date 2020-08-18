(function(){
    'use strict';
     
    angular.module('MenuApp')
    .controller('MenuItemsController',MenuItemsController);

    MenuItemsController.$inject=['menuItems','category'];
    function MenuItemsController(menuItems,category){
        var ctrl=this;
        ctrl.category=category;
        ctrl.items=menuItems;
    }
})();