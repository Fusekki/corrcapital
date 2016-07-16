
function startFadeIn() {
    // if ($("#company").offset().top < 150) {
    if (window.pageYOffset > 375) {
        console.log('start fading');
        $('#tile-art').addClass('tile-show');

    }
}

var x = 1;
var tiles = $('.tile').get();
function addFadeListeners() {
    //var tiles = $('.tile').get();
    for (var idx = 0; idx < tiles.length; idx++) {
        tiles[idx].addEventListener("transitionend", tileFadein, false);
        tiles[idx].addEventListener("webkitTransitionEnd", tileFadein, false);
        tiles[idx].addEventListener("mozTransitionEnd", tileFadein, false);
        tiles[idx].addEventListener("msTransitionEnd", tileFadein, false);
        tiles[idx].addEventListener("oTransitionEnd", tileFadein, false);
        console.log('added listener.');
        console.log(tiles[idx]);

    }
}


$(window).scroll(startFadeIn);
$(document).ready(startFadeIn);
$(document).ready(addFadeListeners);



    // window.addEventListener("scroll", startFadeIn);
    //
    // var tiles = $('.tile').get();
    // // console.log(tiles);
    function tileFadein(e) {

        // var tile = tiles.splice(Math.floor(Math.random() * tiles.length), 1);
        var tile = tiles[x];

        $(tile).addClass('tile-show');
        console.log(tiles);
        console.log('done fading');
        console.log(tile);
        x++;


    }






function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $('#company').offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}




