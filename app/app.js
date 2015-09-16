var app = angular.module('directivePractice', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/home',{


})

    .otherwise({
      redirectTo:'/home'
    });


});
