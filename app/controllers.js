'use strict';

app.controller('DataPageController',['$http','$location', function($http, $location){
  var vm=this;
  // vm.dataResults=DataService.getData();
    $http.get('http://71.212.144.15:5000')
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
  $http.post('http://71.212.144.15:5000/water')
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
  $http.post('http://71.212.144.15:5000/turn')
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

app.controller("BarCtrl", function ($scope, $http) {
  $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'];
  $scope.series = ['This Week', 'Last Week'];



    $http.get('http://71.212.144.15:5000/data')
    .then(function(result){



var sorted=sortdatabyweek(result);
  $scope.data = [
    sorted.normalizedData1,
    sorted.normalizedData2
  ];

  $scope.colors = ['#A29F15','#510D0A','#F3B61F','#191102'];
    });
});


var today;

Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();
  today=dd;
  return [this.getFullYear(), !mm[1] && '0', mm, !dd[1] && '0', dd].join(''); // padding
};

function sortdatabyweek(result){
  var date = new Date();
  date.yyyymmdd();

        //console.log(result.data.data[i][3].split("-")[1]>today-7);
        // if((result.data.data[0][4])<Date.now()-{
        //   console.log(result.data.data[0][1]);
        // }
        var monday1=[];
        var monday2=[];
        var tuesday1=[];
        var tuesday2=[];
        var wednesday1=[];
        var wednesday2=[];
        var thursday1=[];
        var thursday2=[];
        var friday1=[];
        var friday2=[];
        var saturday1=[];
        var saturday2=[];
        var sunday1=[];
        var sunday2=[];
        var normalizedData1=[];
        var normalizedData2=[];
        result=result.data.data;
        for(var i=0; i<result.length; i++){
          var day = new Date(result[i][3].split(" "));
          if(Number(result[i][3].split("-")[2].split(" ")[0])>=today-6){
              if(day.getDay()===1){
                monday1.push(result[i][0]);
              }
              else if(day.getDay()===2){

                tuesday1.push(result[i][0]);

              }
              else if(day.getDay()===3){
                wednesday1.push(result[i][0]);
              }
              else if(day.getDay()===4){
                thursday1.push(result[i][0]);
              }
              else if(day.getDay()===5){
                friday1.push(result[i][0]);
              }
              else if(day.getDay()===6){
                saturday1.push(result[i][0]);
              }
              else if (day.getDay()===7){
                sunday1.push(result[i][0]);
              }
          }
          else if (Number(result[i][3].split("-")[2].split(" ")[0])<today-6 && Number(result[i][3].split("-")[2].split(" ")[0])>today-14){
            var day = new Date(result.data.data[i][3].split(" "));
              if(day.getDay()===1){
                monday2.push(result[i][0]);
              }
              else if(day.getDay()===2){
                tuesday2.push(result[i][0]);
              }
              else if(day.getDay()===3){
                wednesday2.push(result[i][0]);
              }
              else if(day.getDay()===4){
                thursday2.push(result[i][0]);
              }
              else if(day.getDay()===5){
                friday2.push(result[i][0]);
              }
              else if(day.getDay()===6){
                saturday2.push(result[i][0]);
              }
              else if (day.getDay()===7){
                sunday2.push(result[i][0]);
              }
          // monday2=normalize(monday2);
          // tuesday2=normalize(tuesday2);
          // wednesday2=normalize(wednesday2);
          // thursday2=normalize(thursday2);
          // friday2=normalize(friday2);
          // saturday2=normalize(saturday2);
          // sunday2=normalize(sunday2);
          }
        }

        monday1=normalize(monday1);
        tuesday1=normalize(tuesday1);
        wednesday1=normalize(wednesday1);
        thursday1=normalize(thursday1);
        friday1=normalize(friday1);
        saturday1=normalize(saturday1);
        sunday1=normalize(sunday1);
         normalizedData1.push(monday1[0], tuesday1[0], wednesday1[0], thursday1[0], friday1[0], saturday1[0], sunday1[0]);
         normalizedData2.push(monday2[0], tuesday2[0], wednesday2[0], thursday2[0], friday2[0], saturday2[0], sunday2[0]);
        return({normalizedData1, normalizedData2});
}

function normalize(result){
  var data=[];
  var mean=0;
  var normalizedData=[];
  if(result.length>1){
    for(var i=0; i<result.length; i++){
          data.push(result[i]);
          mean=mean+result[i];

        }
        mean=mean/(result.length);
        var sum=0;
        var sigma;
        for(var i=0; i<data.length; i++){
          sum=sum+(Math.pow(data[i]-mean, 2));
        }

        sigma=Math.sqrt(sum*(1/data.length));
        for(var i=0; i<data.length; i++){
          if(!(data[i]>(mean+(3*sigma))||data[i]< (mean-(3*sigma)))){
            normalizedData.push((data[i]*(9/5))+32);
            return normalizedData;
          }
        }

  }
  else{
    return result;
  }

}
