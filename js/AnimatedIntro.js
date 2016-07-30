
// jQuery to collapse the navbar on scroll
function fadeIntro() {
    if ($(".navbar").offset().top > 550) {
        $(".intro").addClass("fadeOut");
        $(".intro-body").addClass('fadeAway');
    } else {
        $(".intro").removeClass("fadeOut");
        $(".intro-body").removeClass('fadeAway');
    }
}

$(window).scroll(fadeIntro);
$(document).ready(fadeIntro);

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

// // Closes the Responsive Menu on Menu Item Click
// $('.navbar-collapse ul li a').click(function() {
//     if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
//         $('.navbar-toggle:visible').click();
//     }
// });

