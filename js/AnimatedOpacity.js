$(function() {

    function startFadeIn() {
        // if ($("#company").offset().top < 150) {
        if (window.pageYOffset > 200) {
            console.log('start fading');
            $('#tile-art').addClass('tile-show');

            // }
        }
    }


    // $( "#company" ).scroll(function() {
    //     startFadeIn();
    // });
    // var shit = $('#company');
    // console.log(shit);
    // shit.addEventListener("scroll", startFadeIn);
    window.addEventListener("scroll", startFadeIn);

    var tiles = $('.tile').get();
    // console.log(tiles);
    function tileFadein(e) {

        var tile = tiles.splice(Math.floor(Math.random() * tiles.length), 1);


        $(tile).addClass('tile-show');

        console.log('done fading');
        // console.log(window.pageYOffset);

    }
    for (var idx = 0; idx < tiles.length; idx++) {
        // console.log($("#company").offset().top);
        // console.log(window.pageYOffset);
        // console.log(tiles[idx]);
        tiles[idx].addEventListener("transitionend", tileFadein, false);
        tiles[idx].addEventListener("webkitTransitionEnd", tileFadein, false);
        tiles[idx].addEventListener("mozTransitionEnd", tileFadein, false);
        tiles[idx].addEventListener("msTransitionEnd", tileFadein, false);
        tiles[idx].addEventListener("oTransitionEnd", tileFadein, false);

    }



    console.log($("#company").offset().top );

});

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $('#company').offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

// $(document).ready(startFadeIn);


