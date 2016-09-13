'use strict';
var app= angular.module('piData',['ngRoute', 'chart.js']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        // .when('/',{templateUrl:'/templates/start'})
        .when('/data',{templateUrl:'../views/datapage'})
        .when('/', {templateUrl:'../views/home'})
        .when('/project', {templateUrl:'../views/project'})
        .when('/aboutme', {templateUrl:'../views/aboutme'})
        .otherwise({redirectTo:'/'});
}]);

// app.config(['$httpProvider', function($httpProvider){
//   $httpProvider.interceptors.push('authInterceptor');
// }]);
