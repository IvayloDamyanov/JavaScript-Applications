let text1 = document.createElement("h2");
let text2 = document.createElement("h2");
let map = document.createElement("div");
let body = document.querySelector("body");
let geoLocation = navigator.geolocation;
let promise;

text1.innerHTML = "Your area:";
text2.innerHTML = "Map";
body.appendChild(text1);
body.appendChild(map);
body.appendChild(text2);

geoLocationPromise = new Promise(function (resolve, reject){
                        geoLocation.getCurrentPosition(
                            function(position){resolve(position)},
                            function(error){reject(error)}
)});

geoLocationPromise
    .then(getLatitudeLongitude)
    .then(showPosition);

function getLatitudeLongitude(position) {
    var latlon;
    if (position.coords){
        latlon = position.coords.latitude + "," + position.coords.longitude;
    } else {
        handleError();
    }
    return latlon;
}

function showPosition(latlon) {
    //loading map only if it does not contain error message
    if (map.innerHTML === ""){
        var img_url = "http://maps.google.com/maps/api/staticmap?sensor=false&center=" 
                        + latlon
                        + "&size=512x512"
                        + "&zoom=15";

        map.innerHTML = "<img src='"+img_url+"'>";
    }
}

function handleError(){
    map.innerHTML = "Could not get your location"; //The condition of the task does not require error handling
}