var city=" ";
var searchCity = $("#search-city");
var searchBtn = $("#search-btn");
var clearButton = $("clear-history");
var currentCity = $("#current-city");
var currentTemperature = $("#temperature");
var currentHumidity = $("#humidity");
var currentWSpeed = $("#wind-speed");
var currentUvIndex = $("#uv-index");
var sCity[ ];


var callApi();
function callApi ()

var requestCity = `api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2beb0dee2960bc7c066214b6df4ceada`;
fetch (requestCity)

.then(function (response) {
    if (response.status != 404) {
        return response.text('Cannot get your current location.');
    } else {
        alert ("Please enter city name")
        location.reload();
    }
})
.then(function (data) {
    currentCity = {
        lat: `${data.coord.lat}`
        lon: `${data.coord.lon}`
    };
}

console.log(currentCity)


   
   //Button
searchBtn.addEventListener("click," handleFormSubmit)





