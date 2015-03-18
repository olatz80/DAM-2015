$(document).ready(function() {
    // Calcular posición
navigator.geolocation.getCurrentPosition(showMap);
    
    function showMap(position) {
        var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height = '400px';
        mapcanvas.style.width = '560px';

        document.querySelector('article').appendChild(mapcanvas);

        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "¡Usted está aquí!"
        });
    }
    
//    function posicion(){
//    if (navigator.geolocation) {
//    var position=navigator.geolocation.getCurrentPosition(showMap) {
////        var coords = position.coords;
////        showMap(coords.latitude, coords.longitude, coords.accuracy);
//      
//    });
//    }
//    }
    
});