'use strict';

app.controller('DataPageController',['$http','$location','DataService', function($http, $location, DataService){
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

// app.controller('graphController', function($scope){
//     // Options
//     $scope.width = 600;
//     $scope.height = 350;
//     $scope.yAxis = 'Temperature';
//     $scope.xAxis = 'Time';
//
//     // Data
//     $scope.points = [
//       {
//       label: 'Monday',
//       xValue: 1,
//       yValue: 36
//       },
//       {
//       label: 'Tuesday',
//       xValue: 2,
//       yValue: 54
//       },
//       {
//       label: 'Wednesday',
//       xValue: 3,
//       yValue: 62
//       },
//       {
//       label: 'Thursday',
//       xValue: 4,
//       yValue: 82
//       },
//       {
//       label: 'Friday',
//       xValue: 5,
//       yValue: 96
//       },
//       {
//       label: 'Saturday',
//       xValue: 6,
//       yValue: 104
//       },
//       {
//       label: 'Sunday',
//       xValue: 7,
//       yValue: 122
//       },
//     ];
//
//     // Find Maximum X & Y Axis Values - this is used to position the points as a percentage of the maximum
//     $scope.maxY = 0;
//     $scope.maxX = 0;
//
//     var arrLength = $scope.points.length;
//     for (var i = 0; i < arrLength; i++) {
//         // Find Maximum X Axis Value
//       	if ($scope.points[i].yValue > $scope.maxY)
//         $scope.maxY = $scope.points[i].yValue;
//       	// Find Maximum Y Axis Value
//       	if ($scope.points[i].xValue > $scope.maxX)
//         $scope.maxX = $scope.points[i].xValue;
//     }
//
//   // End Controller
// 	});
