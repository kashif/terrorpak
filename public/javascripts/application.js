var map;

function initialize() {
  var latlng = new google.maps.LatLng(30.18, 71.52);
  var myOptions = {
    zoom: 6,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}

window.onload = initialize;