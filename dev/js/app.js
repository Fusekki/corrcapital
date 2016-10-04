var wheel;
var wheels = $('.constellation').get();
var c = 0;

$(function() {
    "use strict";
    new WOW().init();
    addPageScroll();
    collapseNavbar();
    addFadeListeners();
    addTouchEvents();
    initContactForm();

    // disable to submit button on load
    // document.getElementById("form-button").disabled = true;
    $('.text-carousel').carousel({
        pause: "false"
    });

    /*When clicking on Full hide fail/success boxes */
    $('#name').focus(function() {
        $('#success').html('');
    });

});


// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    "use strict";

    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);


// jQuery for page scrolling feature - requires jQuery Easing plugin
function addPageScroll() {
    "use strict";
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
        e.preventDefault();
    });


}

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    "use strict";
    if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
        $('.navbar-toggle:visible').click();
    }
});


function initMap() {
    "use strict";
    // console.log('here in initmap.');
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var map = null;
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.757118, -73.971890), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: true,
        draggable: false,

    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
    // console.log(mapElement);
    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    // var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.757118, -73.971890);
    var officeMarker = new google.maps.Marker({
        position: myLatLng,
        map: map
        // icon: image
    });

    google.maps.event.addDomListener(window, 'load', initMap);
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(new google.maps.LatLng(40.757118, -73.971890));
    });
}






function addFadeListeners() {
    "use strict";

    for (var idx = 0; idx < wheels.length; idx++) {
        wheels[idx].addEventListener("transitionend", wheelFadein, false);
        wheels[idx].addEventListener("webkitTransitionEnd", wheelFadein, false);
        wheels[idx].addEventListener("mozTransitionEnd", wheelFadein, false);
        wheels[idx].addEventListener("msTransitionEnd", wheelFadein, false);
        wheels[idx].addEventListener("oTransitionEnd", wheelFadein, false);
    }

    // Initiate Fade on first wheel
    var $elem = $('#constellation-one');
    // console.log('Adding show to first wheel');
    $elem.addClass('wheel-show');
}


function wheelFadein(e) {
    "use strict";

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
    "use strict";

    $("#carousel-planets").swiperight(function() {
        $(this).carousel('prev');
    });
    $("#carousel-planets").swipeleft(function() {
        $(this).carousel('next');
    });

}

function initContactForm() {
    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $('#captcha-error').hide();
            // console.log('ajax sequence.');
            $.ajax({
                url: "mail/process_Form.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message,
                    //THIS WILL TELL THE FORM IF THE USER IS CAPTCHA VERIFIED.
                    captcha: grecaptcha.getResponse()
                },
                cache: false,
                success: function() {
                    // Success message
                    //  console.log('success');
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    // console.log('fail');
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
}

