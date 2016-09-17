
var x = 1;
var wheel;
var wheels = $('.constellation').get();
var fade = false;
var r;
var c = 0;


// Prevent over-scrolling on iOS devices.

document.body.addEventListener('touchmove', function(event) {
    event.preventDefault();
}, false);


$(function() {
    new WOW().init();
    collapseNavbar();
    addFadeListeners();
    addTouchEvents();

    $('.text-carousel').carousel({
        pause: "false"
    });

});


// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    // console.log('here');
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        // $('.parallax').stop().animate({
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // console.log('here.');

    $('a.page-scroll').bind('hover', function(event) {
        if ($(".brand-image-logo").hasClass('animated')) {
            $(".brand-image-logo").removeClass("animated");
            $(".brand-image-logo").removeClass("zoomIn");
        } else {
            $(".brand-image-logo").addClass("animated");
            $(".brand-image-logo").addClass("zoomIn");


        }
        event.preventDefault();

    });

    $("img").mousedown(function(e){
        e.preventDefault()
    });


});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
        $('.navbar-toggle:visible').click();
    }
});


// Google Maps Scripts
// var map = null;
// // When the window has finished loading create our google map below
// google.maps.event.addDomListener(window, 'load', init);
// google.maps.event.addDomListener(window, 'resize', function() {
//     map.setCenter(new google.maps.LatLng(40.757118, -73.971890));
// });

function initMap() {
    console.log('here in initmap.');
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.757118, -73.971890), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        // styles: [{
        //     "featureType": "water",
        //     "elementType": "geometry",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 17
        //     }]
        // }, {
        //     "featureType": "landscape",
        //     "elementType": "geometry",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 20
        //     }]
        // }, {
        //     "featureType": "road.highway",
        //     "elementType": "geometry.fill",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 17
        //     }]
        // }, {
        //     "featureType": "road.highway",
        //     "elementType": "geometry.stroke",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 29
        //     }, {
        //         "weight": 0.2
        //     }]
        // }, {
        //     "featureType": "road.arterial",
        //     "elementType": "geometry",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 18
        //     }]
        // }, {
        //     "featureType": "road.local",
        //     "elementType": "geometry",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 16
        //     }]
        // }, {
        //     "featureType": "poi",
        //     "elementType": "geometry",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 21
        //     }]
        // }, {
        //     "elementType": "labels.text.stroke",
        //     "stylers": [{
        //         "visibility": "on"
        //     }, {
        //         "color": "#000000"
        //     }, {
        //         "lightness": 16
        //     }]
        // }, {
        //     "elementType": "labels.text.fill",
        //     "stylers": [{
        //         "saturation": 36
        //     }, {
        //         "color": "#000000"
        //     }, {
        //         "lightness": 40
        //     }]
        // }, {
        //     "elementType": "labels.icon",
        //     "stylers": [{
        //         "visibility": "off"
        //     }]
        // }, {
        //     "featureType": "transit",
        //     "elementType": "geometry",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 19
        //     }]
        // }, {
        //     "featureType": "administrative",
        //     "elementType": "geometry.fill",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 20
        //     }]
        // }, {
        //     "featureType": "administrative",
        //     "elementType": "geometry.stroke",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 17
        //     }, {
        //         "weight": 1.2
        //     }]
        // }]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
    console.log(mapElement);
    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    // var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.757118, -73.971890);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map
        // icon: image
    });
}






function addFadeListeners() {

    for (var idx = 0; idx < wheels.length; idx++) {
        wheels[idx].addEventListener("transitionend", wheelFadein, false);
        wheels[idx].addEventListener("webkitTransitionEnd", wheelFadein, false);
        wheels[idx].addEventListener("mozTransitionEnd", wheelFadein, false);
        wheels[idx].addEventListener("msTransitionEnd", wheelFadein, false);
        wheels[idx].addEventListener("oTransitionEnd", wheelFadein, false);
    }

    // Initiate Fade on first wheel
    var $elem = $('#constellation-one');
    console.log('Adding show to first wheel');
    $elem.addClass('wheel-show');
}


function wheelFadein(e) {

    if (!wheel) {
        wheel = $('#constellation-one');

    }
    this.removeEventListener("transitionend", wheelFadein, false);
    this.removeEventListener("webkitTransitionEnd", wheelFadein, false);
    this.removeEventListener("mozTransitionEnd", wheelFadein, false);
    this.removeEventListener("msTransitionEnd", wheelFadein, false);
    this.removeEventListener("oTransitionEnd", wheelFadein, false);

    wheel = wheels.splice(c, 1);

    wheel = wheels[c];


    $(wheel).addClass('wheel-show');

}

function addTouchEvents() {
    console.log('adding touch event');

    var $elem = document.getElementById('contact-email');

    $elem.addEventListener('touchstart', function(e) {
        e.preventDefault();
        // alert(e.changedTouches[0].pageX) // alert pageX coordinate of touch point
        console.log('touch detected');
        window.open('mailto:test@example.com?subject=subject&body=body');
    }, false);


}