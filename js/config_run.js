angular.module('myApp',[]);
myModule.config(function($provide){
    $provide.value("configTime",new Date());
    $provide.value("runTime", new Date());
    for(var x=0; x< 1000000000; x++){
        var y = Math.sqrt(Math.log(x));
    }
});
myModule.run(function(configTime,runTime){
    runTime.setTime((new Date()).getTime());
});

myModule.controller('ControllerC',['$scope','configTime','runTime',
         function($scope,configTime,runTime){
             $scope.configTime = configTime;
             $scope.runTime = runTime;
         }

]);
function writeIt(){
    var java= document.getElementById("java");
    java.textContent("Welcome To my page");
}