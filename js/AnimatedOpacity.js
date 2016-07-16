var x = 1;
var tiles = $('.tile').get();
var tile;

var fade = false;
var r;


function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    console.log('in checkAnimation');
    var $elem = $('#tile-art');

    // If the animation has already been started
    if ($elem.hasClass('tile-show')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        console.log('in viewport');
        $elem.addClass('tile-show');

        tiles.splice(0,1);
    } else {
        console.log('not in viewport');
    }
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});



// function startFadeIn() {
//     if (!fade) {
//         if ($(".navbar").offset().top > 350) {
//             console.log(($(".navbar").offset().top));
//             console.log('start fading');
//             $('#tile-art').addClass('tile-show');
//             fade = true;
//             tiles.splice(0,1);
//             console.log(tiles.length);
//         } else {
//             console.log('not at proper offset range to trigger.');
//             console.log(($(".navbar").offset().top));
//
//         }
//     }
//
//
//
// }


function addFadeListeners() {
    //var tiles = $('.tile').get();
    for (var idx = 0; idx < tiles.length; idx++) {
        tiles[idx].addEventListener("transitionend", tileFadein, false);
        tiles[idx].addEventListener("webkitTransitionEnd", tileFadein, false);
        tiles[idx].addEventListener("mozTransitionEnd", tileFadein, false);
        tiles[idx].addEventListener("msTransitionEnd", tileFadein, false);
        tiles[idx].addEventListener("oTransitionEnd", tileFadein, false);
        console.log('added listener to...');
        console.log(tiles[idx]);

    }
}
// tiles.splice(0,1);

// $(window).scroll(startFadeIn);
// $(document).ready(startFadeIn);
$(document).ready(addFadeListeners);



    // window.addEventListener("scroll", startFadeIn);
    //
    // var tiles = $('.tile').get();
    // // console.log(tiles);
    function tileFadein(e) {
        console.log(this);
        if (!tile) {
            tile = $('#tile-art');

        }
        // console.log(($(".navbar").offset().top));
        console.log('Finish fading for... ');
        console.log(this);
        this.removeEventListener("transitionend", tileFadein, false);
        this.removeEventListener("webkitTransitionEnd", tileFadein, false);
        this.removeEventListener("mozTransitionEnd", tileFadein, false);
        this.removeEventListener("msTransitionEnd", tileFadein, false);
        this.removeEventListener("oTransitionEnd", tileFadein, false);
        console.log('removed event listener from....');
        console.log(tile);
        r = Math.floor(Math.random() * tiles.length);
        console.log('random tile selected = '  + r.toString());
        console.log('tiles length before splice = ' + tiles.length);

        tile = tiles.splice(r, 1);
        console.log('tiles length = ' + tiles.length);
        // tiles.splice(r,1);
        // var tile = tiles[x];

        $(tile).addClass('tile-show');
        console.log('adding tile-show to tile...');
        console.log($(tile));
        // console.log(tiles);
        // console.log('done fading');
        // console.log(tile);
        // x++;


    }






function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $('#company').offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}




