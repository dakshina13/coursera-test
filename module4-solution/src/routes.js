(function(){
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
    function RoutesConfig($stateProvider,$urlRouterProvider){
        
        $urlRouterProvider.otherwise('/');

        $stateProvider

        .state('home',{
            url:'/',
            templateUrl:'src/templates/home.template.html',
            controller:'HomeController as homeCtrl'
        })
        
        .state('categories',{
            url:'/categories',
            templateUrl:'src/templates/categories.template.html',
            controller:'CategoryController as catCtrl',
            resolve:{
                categoriesList:['MenuDataService',function(MenuDataService){
                    return MenuDataService.getAllCategories();
                }]
            }
        })
        .state('menuItem',{
            url:'/categories/menuitems/{shortName}',
            templateUrl:'src/templates/menuItems.template.html',
            controller:'MenuItemsController as menuCtrl',
            resolve:{
                menuItems:['MenuDataService','$stateParams',function(MenuDataService,$stateParams){
                    return MenuDataService.getItemsForCategory($stateParams.shortName);
                }],
                category:['MenuDataService','$stateParams',function(MenuDataService,$stateParams){
                    return MenuDataService.nameOfCategory($stateParams.shortName);;
                }]
            }
        })

    }
})();