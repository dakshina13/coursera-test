(function(){
    "use strict";

    angular.module('public')
    .controller('SignUpController',SignUpController);

    SignUpController.$inject=['MyInfoService','$rootScope','MenuService'];
    function SignUpController(MyInfoService,$rootScope,MenuService){
        var $ctrl=this;
        var listener=[];
        $ctrl.user={
                    firstname:"",
                    lastname:"",
                    email:"",
                    phone:"",
                    favDish:"",
                    menuItem:""
        };

        $ctrl.updateInfo=function(){
            var x=[];
            var p=MenuService.getFavMenu($ctrl.user.favDish);
            p.then(function(response){
                $ctrl.user.menuItem=response;
            });
            
            MyInfoService.setMyInfo($ctrl.user);
        };
        $ctrl.$onInit=function(){
            $ctrl.serverError=false;
            $ctrl.signUp=false;
            var l1=$rootScope.$on('error:activate',errorDisplay);
            var l2=$rootScope.$on('signup:success',signUpSuccess);
            listener.push(l1);
            listener.push(l2);
        };
        function signUpSuccess(event,data){
            $ctrl.signUp=data.on;
        }
        function errorDisplay(event,data){
            $ctrl.serverError=data.on;
        }
        $ctrl.$onDestroy=function(){
            listener();
        };
    }
})();
