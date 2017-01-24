var initialize = function () {
  var center = {lat:51.481703, lng: -0.191075};
  var eye = {lat:51.503129, lng: -0.118833};
  var wimbledon = {lat:51.433728,lng: -0.214384};
  var cc = "Stamford Bridge";
  var ce = "London Eye";
  var cw = "Wimbledon tennis court"


  var mapDiv = document.querySelector('#main-map')
  
  var mainMap = new MapWrapper(mapDiv, center, 10);
  mainMap.addMarker(center,cc);
  mainMap.addMarker(eye, ce);
  mainMap.addMarker(wimbledon, cw);
  mainMap.addClickEvent();

  var sardiniaButton = document.querySelector("#sardiniaButton");
  sardiniaButton.onclick = function(event){
    mainMap.googleMap.setCenter({lat: 39.220064, lng: 9.124255});
  }
  
  var codeClanButton = document.querySelector("#codeClanButton");
  codeClanButton.onclick = function(event){
    mainMap.googleMap.setCenter({lat:55.947034 ,lng: -3.201905});
  }

  var geolocate = function(){
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      mainMap.googleMap.setCenter(pos)
    })
  }

  var positionButton = document.querySelector("#positionButton");
  positionButton.onclick = geolocate; 
}










window.onload = initialize;