function WeatherService() {

  this.getCity = function getCity(zip) {
    var urlBase = 'http://api.zippopotam.us/us/';
    var url = urlBase + zip;

    return new Promise(function (resolve, reject) {

      $.get(url).then(
        function (data) {
          resolve(data);
        },
        function (error) {
          reject(error);
        }
      );
    });
  }

  this.getWeather = function getWeather(zip) {

    var zipCode = zip['post code'];
    var urlBase = 'http://api.openweathermap.org/data/2.5/';
    var appId = 'bd82255fd0a21fa1238699b9eda2ee35';
    var url = urlBase + 'weather?appid=' + appId + '&units=imperial&zip=' + zipCode;
debugger
    return new Promise(function (resolve, reject) {

      $.get(url).then(
        function (data) {
          resolve(data);
        },
        function (error) {
          reject(error);
        }
      );
    });
  }
};