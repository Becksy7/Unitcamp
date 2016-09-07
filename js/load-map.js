function loadAPI()
{
    var script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyADrdab7WBrSkUjFxI9p9qUg_0qB9Qt1rE&callback=initMap";
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
}
function loadMaps()
{
    //AJAX API загружен успешно. Теперь можно загружать другие API
    google.load("maps", "2", {"callback" : initMap});
}
var map;

function initMap() {
        var myLatLng = {lat: 54.535, lng: 40.173},

            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 54.535, lng: 40.173},
                zoom: 8,
                zoomControl: true,
                scrollwheel: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                mapTypeControl: false,
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });


        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'ЮНИТ'
        });
}
