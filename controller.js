function Controller() {

  var dataStore = new WeatherService;

  function drawCity(resolve) {
    var weather = document.getElementById("weather");
    var template = ''
    template += `
    <h1>${resolve.places[0]["place name"]}</h1>
    `
    weather.innerHTML = template;
  }

  function drawWeather(resolve) {
    debugger
    var weather = document.getElementById("weather");
    var template = ''
    template += `
    <h1>${resolve.temperature[0]["place name"]}</h1>
    `
    weather.innerHTML = template;

  }

  this.promiseChain = function promiseChain(event) {
    event.preventDefault()
    var zip = event.target.zip.value;
    debugger
    dataStore.getCity(zip)
      .then(drawCity)
    dataStore.getWeather(zip)
      .then(drawWeather)
  }
}