// load the map
var mymap = L.map('mapid').setView([51.525, -0.13], 13);
// load the tiles
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
				maxZoom: 18,
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="http://mapbox.com">Mapbox</a>',
				id: 'mapbox.streets'
}).addTo(mymap);
	
	
		
function getLocation() {
	navigator.geolocation.getCurrentPosition(getPosition);
}
function getPosition(position) {
	L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap);
	mymap.setView([position.coords.latitude, position.coords.longitude], 13);
}