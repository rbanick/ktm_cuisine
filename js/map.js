
// the link relation way

  // var colors = {
  //   'bar': '#8e44ad',
  //   'cafe': '#e74c3c',
  //   'pub ': '#16a085',
  //   'restaurant': '#f1c40f'
  // };
  
  var osm = new L.tileLayer('http://{a}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
      maxZoom: 21
    });

// define popups as custom

  // var customOptions = {'className' : 'custom'};

// creates geojson with basic popUp functionality

  $.getJSON('data/restaurants.json', function(data) {
      var geojson = L.geoJson(data, {
        onEachFeature: function (feature, layer) {
          layer.bindPopup("<br> <b>"+feature.properties.names+"</b>""<br> <b>Cuisine: </b>"+feature.properties.cuisine+"<br> <b>Specialties: </b>"+feature.properties.specialties+"<br> <b>Directions: </b>"+feature.properties.directions+"<br><br><b>Comments: </b> <i>"+feature.properties.comment"</i>");
        }x
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
