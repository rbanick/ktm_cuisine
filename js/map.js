
// the link relation way

	var osm = L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
	    maxZoom: 20
    });

// creates geojson with basic popUp functionality

  $.getJSON('data/restaurants.json', function(data) {
    	data = JSON.parse(data);
      var geojson = L.geoJson(data, {
        onEachFeature: function (feature, layer) {
          layer.bindPopup(feature.properties.name);
          // alternate, verbose: layer.bindPopup(<br><center> Name: ' +feature.properties.name+ "<br><center> Cuisine: " +feature.properties.cuisine+" "<br><center> Specialties: " +feature.properties.specialties+" "<br><center> Directions: " +feature.properties.directions+" "<br><center> Comments: " +feature.properties.comments+");
        }
      });

// create the map variable with the boundaries of the GeoJSON

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
