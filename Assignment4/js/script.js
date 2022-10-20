/*
    Assignment #4
    {Vrund Patel}
*/

$(function () {
    // your code here

    navigator.geolocation.getCurrentPosition(success, fail);

    function success(position){
       
        let clat1 = position.coords.latitude;
    
        let clon1 = position.coords.longitude;

        $("#locationhere").html(`<h3>Current Location:</h3><div>Latitude:  ${clat1} <br/> Longitude:  ${clon1}</div>`);
    
        let localLat = localStorage.getItem('storedLat'); 
        let localLong = localStorage.getItem('storedLon'); 
      
        if(localLat && localLong){

            $('#locationhere').append(`<h3>Getting location from the Local storage:</h3> <div id='stored'>Latitude: ${localLat} </br> Longitude: ${localLong}</div>`);

            $('#locationhere').append(`<h3 id='welcomeBack'>Welcome Back to our page</h3>`);
            
            
            let lat2 = parseFloat(localLat);
            let lon2 = parseFloat(localLong);

            let distance = calcDistanceBetweenPoints(clat1, clon1, lat2,lon2);
            let distanceinKm = distance/1000;
            
            $('#locationhere').append(`<h3>You travelled total of ${distanceinKm.toFixed(4)} km</h3>`);
            localStorage.setItem('storedLat', clat1);
            localStorage.setItem('storedLon', clon1);
           
        }
        else{            
            $('#locationhere').append(`<h3>Welcome to our page for the first time!</h3>`);
            localStorage.setItem('storedLat', clat1);
            localStorage.setItem('storedLon', clon1);
            
        }
    }      
    function fail(){
        alert("Sorry! You must allow geolocation by clicking allow in the alert box.");
    }

    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


