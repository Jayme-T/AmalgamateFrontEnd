'use strict';

app.service("DataService", ['$http', function($http){
  var sv=this;
  this.getData=function(){
    return $http.get('http://184.96.221.90:5000')
    .then(function(data){
      console.log("response", data);
      sv.data=data;
    })
    .catch(function(err){
      console.log('error');
      console.log(err);
  });
};
}]);
