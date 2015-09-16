var app = angular.module('directivePractice')
  .service('weatherService', function($http, $q){


    this.getWeather = function(city){
      var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
      var deferred = $q.defer();
      $http.get(weatherUrl).then(function(response){
        
        var parsedResponse = response.data.weather;
        var temp = response.data.main.temp;
        temp = Math.ceil(((temp-273.15)*1.8) +32);
        var weatherType = response.data.weather[0].description;

        var weatherArray = [temp, weatherType];

        deferred.resolve(weatherArray);
      });
      // console.log(parsedResponse);
      return deferred.promise;
    };

  });
