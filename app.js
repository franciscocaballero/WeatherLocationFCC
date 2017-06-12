$(document).ready(function(){

var lat;
var long;
var fTemp;
var cTemp;


$.getJSON('http://ip-api.com/json', function(data2){
  lat = data2.lat;
  long = data2.lon;


var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=5d291dcae7f9d1a344a6ea02391feef7'

$.getJSON(api, function(data){
  var weatherType = data.weather[0].description;
  var kelvin = data.main.temp;
  var windSpeed = data.wind.speed;
  var city = data.name;

  fTemp = (kelvin)*(9/5)-459.67;
  cTemp = kelvin-273;
  var tempSwap = true;

  $('#city').html(city);
  $('#weatherType').html(weatherType);
  $('#fTemp').html(fTemp);
  $('#fTemp').click(function(){

    if(tempSwap === false){
      $('#fTemp').html(cTemp);
      tempSwap = true;
    }else{
      $('#fTemp').html(fTemp);
      tempSwap = false;
    }
  })



  $('#windSpeed').html(windSpeed);
})

});
// function getWeather() {
// $.ajax({
//   url: 'http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=5d291dcae7f9d1a344a6ea02391feef7',
//   jsonp: 'jsonp',
//   dataType: 'jsonp'
//
// success: function(response) {
//   console.log(data.coord);
// }
//
//
//
// });
//
//
// }















});
