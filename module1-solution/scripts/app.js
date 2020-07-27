(function () {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
    $scope.inpString="";
    $scope.message="Message will come here.";
    var items=[];
    var filteredItems=[];
    $scope.sayMessage=function (){
        initialize();
        splitString($scope.inpString);
        removeNull();
        var r=resultString();
        setDivColor(r);
        $scope.message=r;
    };
    function initialize(){
        filteredItems=[];
        items=[];
    }
    function splitString(str){
        items=str.split(',');
    }
    function removeNull(){
        for(var i=0;i<items.length;i++){
              if(items[i]&&items[i]!=" "){
                    filteredItems.push(items[i]);
          }
        }
    }
    function resultString(){
        var x=filteredItems.length;
        if(x>3){
            return "Too much!";
        }else if(x==1||x==0){
            return "Please enter data first!";
        }
        else{
            return "Enjoy!";
        }
    }
    function setDivColor(s){
        var messageDiv=document.getElementById("message");
        switch(s){
            case "Please enter data first!":
                messageDiv.style.borderColor="red";
                messageDiv.style.color="red";
                break;
            default:
                messageDiv.style.borderColor="green";
                messageDiv.style.color="#008000";
        }
    }
}

})();
