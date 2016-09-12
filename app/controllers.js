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
