var x = 1;
var tiles = $('.tile').get();
var tile;
var wheel;
var wheels = $('.constellation').get();
var fade = false;
var r;
var c = 0;


// function isElementInViewport(elem) {
//     var $elem = $(elem);
//
//     // Get the scroll position of the page.
//     var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
//     var viewportTop = $(scrollElem).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();
//
//     // Get the position of the element on the page.
//     var elemTop = Math.round( $elem.offset().top );
//     var elemBottom = elemTop + $elem.height();
//
//     return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
// }

// Check if it's time to start the animation.
// function checkAnimation() {
//     // console.log('in checkAnimation');
//     var $elem = $('#tile-art');
//
//     // If the animation has already been started
//     if ($elem.hasClass('tile-show')) return;
//
//     if (isElementInViewport($elem)) {
//         // Start the animation
//         // console.log('in viewport');
//         $elem.addClass('tile-show');
//
//         tiles.splice(0,1);
//     } else {
//         // console.log('not in viewport');
//     }
// }

// Capture scroll events
// $(window).scroll(function(){
//     checkAnimation();
// });




function addFadeListeners() {
    //var tiles = $('.tile').get();
    for (var idx = 0; idx < tiles.length; idx++) {
        tiles[idx].addEventListener("transitionend", tileFadein, false);
        tiles[idx].addEventListener("webkitTransitionEnd", tileFadein, false);
        tiles[idx].addEventListener("mozTransitionEnd", tileFadein, false);
        tiles[idx].addEventListener("msTransitionEnd", tileFadein, false);
        tiles[idx].addEventListener("oTransitionEnd", tileFadein, false);
        // console.log('added listener to...');
        // console.log(tiles[idx]);

    }

    for (var idx = 0; idx < wheels.length; idx++) {
        wheels[idx].addEventListener("transitionend", wheelFadein, false);
        wheels[idx].addEventListener("webkitTransitionEnd", wheelFadein, false);
        wheels[idx].addEventListener("mozTransitionEnd", wheelFadein, false);
        wheels[idx].addEventListener("msTransitionEnd", wheelFadein, false);
        wheels[idx].addEventListener("oTransitionEnd", wheelFadein, false);
        // console.log('added listener to...');
        // console.log(wheels[idx]);

    }

    // Initiate Fade on first wheel
    var $elem = $('#constellation-one');
    console.log('Adding show to first wheel');
    $elem.addClass('wheel-show');
}

function wheelFade() {

}

$(document).ready(addFadeListeners);
// $(document).ready(wheelFade);

function tileFadein(e) {
    // console.log(this);
    if (!tile) {
        tile = $('#tile-art');

    }
    // console.log('Finish fading for... ');
    // console.log(this);
    this.removeEventListener("transitionend", tileFadein, false);
    this.removeEventListener("webkitTransitionEnd", tileFadein, false);
    this.removeEventListener("mozTransitionEnd", tileFadein, false);
    this.removeEventListener("msTransitionEnd", tileFadein, false);
    this.removeEventListener("oTransitionEnd", tileFadein, false);
    // console.log('removed event listener from....');
    // console.log(tile);
    // console.log(tile);
    r = Math.floor(Math.random() * tiles.length);

    // console.log('random tile selected = '  + r.toString());
    // console.log('tiles length before splice = ' + tiles.length);

    tile = tiles.splice(r, 1);
    // console.log('tiles length = ' + tiles.length);

    $(tile).addClass('tile-show');
    // console.log('adding tile-show to tile...');
    // console.log($(tile));
}

function wheelFadein(e) {

    if (!wheel) {
        wheel = $('#constellation-one');

    }

    // console.log(wheel);

    this.removeEventListener("transitionend", wheelFadein, false);
    this.removeEventListener("webkitTransitionEnd", wheelFadein, false);
    this.removeEventListener("mozTransitionEnd", wheelFadein, false);
    this.removeEventListener("msTransitionEnd", wheelFadein, false);
    this.removeEventListener("oTransitionEnd", wheelFadein, false);
    // console.log('removed event listener from....');
    // console.log(wheel);

    // console.log('random tile selected = '  + r.toString());
    // console.log('tiles length before splice = ' + tiles.length);


    // console.log('wheels length = ' + wheels.length);
    // console.log(c);
    wheel = wheels.splice(c, 1);
    //  console.log('wheels length = ' + wheels.length);
    // console.log(wheels);
    // c++;
    wheel = wheels[c];
    // console.log($(wheel));

    $(wheel).addClass('wheel-show');

    // console.log('adding tile-show to tile...');
    // console.log($(tile));
}




// function isScrolledIntoView(elem)
// {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();
//
//     var elemTop = $('#company').offset().top;
//     var elemBottom = elemTop + $(elem).height();
//
//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }




