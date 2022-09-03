function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 15.309497949886635, lng: 44.237254867127746};
   // 15.309497949886635, 44.237254867127746

    var map = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'صنعاء' // Title Location
    });
}