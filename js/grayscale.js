/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

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
$(document).ready(collapseNavbar);

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

});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

$(function() {
    var mq = window.matchMedia( "(max-width: 1024px)" );
    var photos = $('.photo-container').get();
    var idx_start = 6;
    // console.log(mq);
    // console.log(photos);
    // console.log('test now');
    // console.log(photos.length);


    // media query event handler
    if (mq.matches) {
        for (var idx = 0; idx < photos.length; idx++) {
            photos[idx].setAttribute("data-target", "#portfolioModal" + (idx_start + idx));
            photos[idx].setAttribute("data-toggle", "modal")
            console.log(photos[idx]);
        }
    }
});

if (window.innerWidth > 769) {
    var newHeight = window.innerWidth * .22;
    // console.log(newHeight);

    $('.parallax__layer--back').height(newHeight + 'vh');
}


