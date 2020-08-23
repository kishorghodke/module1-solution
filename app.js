(function() {
  angular.module('LunchCheck', [])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject =['$scope'];
  function LunchCheckController($scope)
  {
  $scope.Result="";
  $scope.inputlength=[];
$scope.CheckResult = function(){
  if ($scope.food=="" || $scope.food==undefined)
  {
    $scope.colour="red";
  $scope.Result="Please enter data first" ;

  }
  $scope.inputlength=$scope.food.split(',');
if($scope.inputlength.length>3)
{  $scope.colour="red";
  $scope.Result="Too much!";

}else{  $scope.colour="green";
  $scope.Result="Enjoy!";

}
}
}
})();
