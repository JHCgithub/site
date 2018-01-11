//logs errors
console.log();
//waits till document is ready, then Jquery function can be used to switch out images
$(document).ready(function() {
	//Shirt section
$(function() {
 $('#switchwhite').click(function(e){
     e.preventDefault();  //prevents a page reload
   $("#previewimg").attr('src',"assets/shirt_white.png"); //switches preview image to the default white shirt
 
						 
});
});

$(function() {
 $('#switchblack').click(function(e){
     e.preventDefault();  
   $("#previewimg").attr('src',"assets/shirt_black.png");
 });
});
	
$(function() {
 $('#switchblue').click(function(e){
     e.preventDefault();
   $("#previewimg").attr('src',"assets/shirt_blue.png");
 });
});

$(function() {
 $('#switchgreen').click(function(e){
     e.preventDefault();
   $("#previewimg").attr('src',"assets/shirt_green.png");
 });
});
	
$(function() {
 $('#switchyellow').click(function(e){
     e.preventDefault();
   $("#previewimg").attr('src',"assets/shirt_yellow.png");
 });
});
	
$(function() {
 $('#switchred').click(function(e){
     e.preventDefault();
   $("#previewimg").attr('src',"assets/shirt_red.png");
 });
});
	//Mug section
$(function() {
 $('#switchwhitemug').click(function(e){
     e.preventDefault();
   $("#previewimg").attr('src',"assets/mug_white.png"); //switches preview image to default white mug
 });
});
	
$(function() {
 $('#switchgreymug').click(function(e){
     e.preventDefault();
   $("#previewimg").attr('src',"assets/mug_grey.png");
 });
});
	
$(function() {
 $('#switchpurplemug').click(function(e){
     e.preventDefault();
   $("#previewimg").attr('src',"assets/mug_purple.png");
 });
});
$(function() {
 $('#switchbluemug').click(function(e){
     e.preventDefault();
   $("#previewimg").attr('src',"assets/mug_blue.png");
 });
});
$(function() {
 $('#switchgreenmug').click(function(e){
     e.preventDefault();
   $("#previewimg").attr('src',"assets/mug_green.png");
 });
});
	
$(function() {
 $('#switchorangemug').click(function(e){
     e.preventDefault();
   $("#previewimg").attr('src',"assets/mug_orange.png");
 });
});
	//end of mugs section
});


//maps section for geo
var x = "";
window.onload = function getLocation() {
	
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=AIzaSyDtqRNxQICtU7SudN9wjsjseF64TsjSREY";

    document.getElementById("map").innerHTML = "<img src='"+img_url+"'>";
}
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.")
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.")
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.")
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.")
            break;
    }
}