angular.module('myApp',[]).
controller('ControllerA',function($scope){
      $scope.header='Our Services';
      $scope.content = 'Lorem ipsum dolor sit amet.';

}).
controller('ControllerB',function($scope){
      $scope.colors=['red','green','blue'];
      $scope.myStyle={'background-color':'blue'};
      $scope.header='Lorem ipsum dolor sit amet.';
      $scope.content='Lorem ipsum dolor sit amet.';
      $scope.msg="Welcome to My Dinamic Page";
}).
controller('ControllerC',function($scope){
    $scope.header="Lorem ipsum dolor sit.";
    $scope.content='Lorem ipsum dolor sit.';
    $scope.days=['Monday','Tuesday','Wednesday','Thursday','Friday'];
}).
controller('ControllerM',function($scope){
      $scope.colors=['red','green','blue'];
      $scope.myStyle={'background-color':'blue'};
      $scope.header='Lorem ipsum dolor sit amet.';
      $scope.content='Lorem ipsum dolor sit amet.';
      $scope.msg="Welcome to My Dinamic Page";
});


