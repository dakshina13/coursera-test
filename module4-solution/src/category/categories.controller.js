(function(){
    'use strict';

    angular.module('MenuApp')
    .controller('CategoryController',CategoryController);

    CategoryController.$inject=['categoriesList'];
    function CategoryController(categoriesList){
        var cat=this;
        cat.showHome=true;
        cat.onShowSpinner=function(){
            cat.showHome=false;
        }
        cat.$onInit=function(){
            var i,newList=[];
            for(i=0;i<categoriesList.length;i=i+2){
                var row={column_1:categoriesList[i],column_2:categoriesList[i+1]};
                newList.push(row);
            }
            cat.items=newList;
        }
    }
})();