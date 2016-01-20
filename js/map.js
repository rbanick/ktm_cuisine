
// the link relation way

$(document).ready(function() {

	var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    maxZoom: 20 });

// creates geojson with popUp functionality

  $.getJSON($('link[rel="points"]').attr("href"), function(data) {
  	data = JSON.parse(data);
    var geojson = L.geoJson(data, {
      onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name);
      }
    });
    });

	var map = L.map('map').fitBounds(geojson.getBounds());

// add the above to the map div

osm.addTo(map);
geojson.addTo(map);

});



// the leaflet-ajax way

// $(document).ready(function() {

// 	var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// 	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
// 	    maxZoom: 21 });

// // function to do popups

// 	function popUp(feature, layer) {
// 	layer.bindPopup(feature.properties.name);
// 	}

// // creates geojson with popUp functionality

// 	var geojsonLayer = new L.GeoJSON.AJAX("http://localhost:8000/restaurants.json", {onEachFeature:popUp});

// 	var map = L.map('map').fitBounds(geojsonLayer.getBounds());

// // add the above to the map div

// osm.addTo(map);
// geojsonLayer.addTo(map);

// });
