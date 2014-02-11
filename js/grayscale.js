//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Guestbook entry validation
var inputs = [];

var getInputs = function() {
    $('input, textarea').each(function() {
        inputs.push(this)
    });
};

var validate = function(userInputs) {
    for ( var i = 0; i < userInputs; i++ ) {
        if ( $(this).val < 1 ) {
            $(this).parent().addClass('has-error');
        }
        else {

        }
    }
};

getInputs();
console.log(inputs)
validate(inputs);