var app=angular.module("myapp",[]);
app.controller('control',function($scope)
{
$scope.value="";
$scope.showlist=[];
$scope.addtask=function()
{
$scope.showlist.push($scope.value);
localStorage.setItem('todolist',JSON.stringify($scope.showlist));
if(JSON.parse(localStorage.getItem('todolist')!=null))
{
$scope.showlist=JSON.parse(localStorage.getItem('todolist'));
}
}

$scope.deleteme=function(index)
{
$scope.showlist.splice(index,1);
localStorage.setItem('todolist',JSON.stringify($scope.showlist));
}
}
);

