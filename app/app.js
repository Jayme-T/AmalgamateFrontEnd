'use strict';
var app= angular.module('piData',['ngRoute', 'chart.js']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        // .when('/',{templateUrl:'/templates/start'})
        .when('/',{templateUrl:'../views/datapage'})
        .when('/home', {templateUrl:'../views/home'})
        .otherwise({redirectTo:'/'});
}]);

// app.config(['$httpProvider', function($httpProvider){
//   $httpProvider.interceptors.push('authInterceptor');
// }]);
