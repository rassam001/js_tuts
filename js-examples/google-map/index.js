function initMap(){
  // Map Output //
  var googleMap = document.getElementById('google-map');

  // Map's Center //
  var devugees = { lat: 51.213985, lng: 6.788535 };

  // Map options //
  var options = {
    zoom: 15,
    center: devugees
  };

  // New map //
  var myMap = new google.maps.Map(googleMap, options);
  
  // Marker for the center //
  var marker = new google.maps.Marker({
    position: devugees,
    map: myMap
  })
  
  // Info Window //
  var myInfoWin = new google.maps.InfoWindow({
    content: '<h1>Devugees Düsseldorf</h1>' + '<img src="images/devugees-logo_01-small.png">'

  });
  
  // add EventListener to the marker to show the info window //
  marker.addListener('click', function(event){
   myInfoWin.open(myMap, marker);
 });
}
