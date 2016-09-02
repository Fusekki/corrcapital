
var x = 1;
var wheel;
var wheels = $('.constellation').get();
var fade = false;
var r;
var c = 0;


$(function() {


    addFadeListeners();

});

function addFadeListeners() {
    var $elem = document.getElementById('logo');

        $elem.addEventListener("transitionend", Fadein, false);
        $elem.addEventListener("webkitTransitionEnd", Fadein, false);
        $elem.addEventListener("mozTransitionEnd", Fadein, false);
        $elem.addEventListener("msTransitionEnd", Fadein, false);
        $elem.addEventListener("oTransitionEnd", Fadein, false);
        // console.log('added listener to...');
        // console.log(wheels[idx]);

}


function Fadein(e) {

    var $elem = $('.typing-text-wrapper');
    console.log('Adding show to first wheel');
    $elem.addClass('show');

    this.removeEventListener("transitionend", Fadein, false);
    this.removeEventListener("webkitTransitionEnd", Fadein, false);
    this.removeEventListener("mozTransitionEnd", Fadein, false);
    this.removeEventListener("msTransitionEnd", Fadein, false);
    this.removeEventListener("oTransitionEnd", Fadein, false);

}