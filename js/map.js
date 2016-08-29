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

 /*   var contentString = '<div class="map-slick-wrap">' +
      '<div class="map-slick-slider" id="map-slider">' +
      '<a href="img/photos/_BPlUYkSiYw.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/_BPlUYkSiYw.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/115_1677721744.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/115_1677721744.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/159_97597754.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/159_97597754.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/111_1801740867.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/111_1801740867.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/CcaAIfXsKCQ.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/CcaAIfXsKCQ.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/01.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/01.jpg" width="391" height="260" /></a>' +      
      '<a href="img/photos/104_1016412117.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/104_1016412117.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/161_983957772.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/161_983957772.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/room.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/room.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/92_195317180.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/92_195317180.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/140_1386623511.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/140_1386623511.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/M2eXMA2INGc.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/M2eXMA2INGc.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/foto02046.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/foto02046.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/152_698068749.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/152_698068749.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/153_1483214635.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/153_1483214635.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/korpus.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/korpus.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/169_426612330.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/169_426612330.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/lager_photo_1.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/lager_photo_1.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/KqXXblrLyDE.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/KqXXblrLyDE.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/18_243190152.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/18_243190152.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/52_233368010.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/52_233368010.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/stolovaya.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/stolovaya.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/OudXOgz546Q.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/OudXOgz546Q.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/pFBHoKllCKk.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/pFBHoKllCKk.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/TW_tw9S_jrI.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/TW_tw9S_jrI.jpg" height="260" /></a>' +
      '<a href="img/photos/94_606600664.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/94_606600664.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/grr_9605.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/grr_9605.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/xIiB39G-AUU.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/xIiB39G-AUU.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/-9gikZpeSs4.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/-9gikZpeSs4.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/7_1599879866.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/7_1599879866.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/9bOX21vKlzE.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/9bOX21vKlzE.jpg" width="391" height="260" /></a>' +
      '<a href="img/photos/grr_9505.jpg" data-lightbox="gallery" class="item"><img src="img/photos/preview/grr_9505.jpg" width="391" height="260" /></a>' +
      '</div></div>';
 
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    infowindow.open(map,marker);

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
    google.maps.event.addListenerOnce(map, 'idle', function(){

        $('#map-slider').slick({
            slidesToScroll: 1,
            slidesToShow:1,
            fade: true,
            autoplay:true
        });

        lightbox.option({
            albumLabel:'Изображение %1 из %2'
        })

    });*/

}
