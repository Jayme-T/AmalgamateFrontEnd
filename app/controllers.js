'use strict';

app.controller('DataPageController',['$http','$location', function($http, $location){
  var vm=this;
  // vm.dataResults=DataService.getData();
    $http.get('http://184.96.221.90:5000')
    .then(function(response){
      console.log("response", response);
      vm.data=response;
    })
    .catch(function(err){
      console.log('error');
      console.log(err);
      //need to add section for thorough error handling
    });

vm.waterCompost=function(){
  $http.post('http://184.96.221.90:5000/water')
  .then(function(response){
    console.log("response", response);
    vm.data=response;
  })
  .catch(function(err){
    console.log('error');
    console.log(err);
});
};
vm.turnCompost=function(){
  $http.post('http://184.96.221.90:5000/turn')
  .then(function(response){
    console.log("response", response);
    vm.data=response;
  })
  .catch(function(err){
    console.log('error');
    console.log(err);
});
};

}]);

app.controller("BarCtrl", function ($scope) {
  $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'];
  $scope.series = ['This Week', 'Last Week'];

  $scope.data = [
    [65, 59, 80, 81, 56, 55],
    [28, 48, 40, 19, 86, 27]
  ];
  $scope.colors = ['#A29F15','#510D0A','#F3B61F','#191102'];
});
