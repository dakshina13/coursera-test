(function(){
    "use strict";
    angular.module('public')
    .component('favItem',{
        templateUrl:'src/public/fav/fav.html',
        controller:'FavController',
        controllerAs:'favCtrl' ,
        bindings:{
            menuItem:'<'
        } 
    });
})();