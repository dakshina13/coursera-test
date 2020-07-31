(function(){
    'use strict';
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ToBuyController.$inject=['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var buyCtrl=this;

        buyCtrl.boughtMessage="";

        buyCtrl.items=ShoppingListCheckOffService.getBuyItems();

        buyCtrl.displayBoughtMessage=function(){
            if(boughtCtrl.items.length===0)
                boughtCtrl.buyMessage="Everything is bought!";
        }

        buyCtrl.bought=function(itemIndex){
            ShoppingListCheckOffService.addToBoughtItems(itemIndex);
        }
        buyCtrl.displayBuyMessage=function(){
            if(buyCtrl.items.length===0){
                return true;
            }
            else{
                return false;
            }
        }

    }

    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var boughtCtrl=this;

        boughtCtrl.items=ShoppingListCheckOffService.getBoughtItems();

        boughtCtrl.buyMessage="";


        boughtCtrl.displayBuyMessage=function(){
            if(boughtCtrl.items.length===0){
                return true;
            }
            else{
                return false;
            }
        }
        
    }

    function ShoppingListCheckOffService(){
        var service=this;

        var toBuyItems=[{"name":"cookies","quantity":"10 boxes"},
        {"name":"milk","quantity":"3 litres"},
        {"name":"chips","quantity":"4 packets"},
        {"name":"Biscuits","quantity":"5 boxes"},
        {"name":"Eggs","quantity":"10"}];

        var boughtItems=[];

        service.getBuyItems=function(){
            return toBuyItems;
        }

        service.getBoughtItems=function(){
            return boughtItems;
        }
        service.addToBoughtItems=function(itemIndex){
            var item =toBuyItems[itemIndex];
            boughtItems.push(item);
            toBuyItems.splice(itemIndex,1);
        }
    }
})()