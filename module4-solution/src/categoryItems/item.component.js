(function(){
    'use strict';
    angular.module('MenuApp')
    .component('menuItem',{
        templateUrl:'src/templates/menuItem.template.html',
        controller:'MenuItemController',
        bindings:{
            items:'<'
        }
    })
})();