var app = angular.module('directivePractice').directive('dirWeather',function(){
  return{
    templateUrl: 'templates/dirWeather.html',
    scope:{
    currentUser: '=',
    weatherCall:'&'
  },

  controller: function($scope){


    $scope.$watch('currentUser', function(){
      $scope.weather = $scope.weatherCall({data: $scope.currentUser.city}).then(function(response){
        $scope.weather.temp =response[0];
        $scope.weather.type = response[1];
        })
      });
      }

    };
});
