$(document).ready(function() {

    var today = moment();
    
    $("#currentDay").text(today.format("[The date today is] dddd MMM Do, YYYY [and the time is] h:mm a"));
});

var city="";

    var APIKey="6ef8902c78593fb8c183418ac1fb301d";
    var searchCity = $("#search-city");
var searchButton = $('#search-button');
var clearButton = $("#clear-history");
var currentCity = $("#current-city");
let currentHumidity= $("#humidity");
var currentTemperature = $("#temperature");
let currentWSpeed= $("#wind-speed");
var sCity =[];


function displayWeather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==""){
        city=searchCity.val().trim();
        currentWeather(city);
    }
}

function currentWeather(city){

    const queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey + "&units=imperial";
    $.ajax({
        url:queryURL,
        method:"GET",
    }).then(function(response){


        console.log(response);

        const weathericon= response.weather[0].icon;
        const iconurl="https://openweathermap.org/img/wn/"+weathericon +"@2x.png";

        const date=new Date(response.dt*1000).toLocaleDateString();

        $(currentCity).html(response.name +"("+date+")" + "<img src="+iconurl+">");


        const tempF = response.main.temp;
        $(currentTemperature).html((tempF).toFixed(2)+"&#8457");

        $(currentHumidity).html(response.main.humidity+"%");

        const ws=response.wind.speed;
        $(currentWSpeed).html(ws+"MPH");



$("#search-button").on("click",displayWeather);
$("#clear-history").on("click",clearHistory);