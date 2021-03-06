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

  fTemp = (kelvin*(9/5)-459.67).toFixed(1);
  cTemp = (kelvin-273).toFixed(1);
  var tempSwap = true;

  $('#city').html(city);
  $('#weatherType').html(weatherType);
  $('#fTemp').html(fTemp + " &#8457;");
  $('#fTemp').click(function(){

    if(tempSwap === false){
      $('#fTemp').html(fTemp + " &#8457;");
      tempSwap = true;
    }else{
      $('#fTemp').html(cTemp + " &#8451;");
      tempSwap = false;
    }
  });


windSpeed = (2.237*(windSpeed)).toFixed(1);
  $('#windSpeed').html(windSpeed + " MPH");

  if(fTemp > 80){
    $('body').css('background-color','#F3E40E');
    $('#sun').html('<i class="fa fa-sun-o fa-spin" ></i>');
  } else if(fTemp > 60){
    $('body').css('background-color','#0EF397');
    $('#sun').html('<i class="fa fa-cloud fa-spin"></i>');
  }else if (fTemp > 40){
$('body').css('background-color','#0FFFFF');
$('#sun').html('<i class="fa fa-snowflake-o fa-spin"></i>');
  }

});

});

document.getElementById("time").innerHTML = Date();

});
