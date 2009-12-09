var map;
var timeplot;

function initialize() {
  var latlng = new google.maps.LatLng(30.18, 71.52);
  var myOptions = {
    zoom: 6,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  
  var plotInfo = [
    Timeplot.createPlotInfo({
      id: "plot1"
    })
  ];
  
  timeplot = Timeplot.create(document.getElementById("timeplot_canvas"), plotInfo);
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}

var resizeTimerID = null;

function handleResize() {
  if (resizeTimerID == null) {
    resizeTimerID = window.setTimeout(function() {
      resizeTimerID = null;
      timeplot.repaint();
    }, 100);
  }
}

window.onload = initialize;
window.onunload = GUnload;
window.onresize = handleResize;