const weather = document.querySelector(".js-weather");
const API_KEY = "57de14cd4267eb84c07ccc7af55c950a";
const COORDS = 'coords';

function getWeather(lat, lng) {

    function getJson(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.send(null);

        return xmlHttp.responseText;
    }


    //   console.log(getJson("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid="+API_KEY+"&units=metric") )
    var json = eval("(" + getJson("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&appid=" + API_KEY + "&units=metric") + ")");

    console.log(json);
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = temperature + "°C@" + place

}
function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
};
function handleGeoSucces(position) {
    console.log('get location');
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}
function handleGeoError() {
    console.log('Cant access location just Seoul');
    const latitude = 37.566;
    const longitude = 126.9784;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);

}
function askForCoords() {
  setTimeout(navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError),2000) 
}
function loadCoords() {
       askForCoords();
}
function init() {
    loadCoords();
}
init();