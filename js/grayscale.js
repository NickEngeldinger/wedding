var navOffset = $('.navbar').offset().top

console.log(navOffset)

if (  navOffset < 50) {
    $('navbar-fixed-top').addClass("top-nav-collapse").hide();
}

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    var nav = $('.navbar-fixed-top');

    if ($(".navbar").offset().top > 50) {
        nav.addClass("top-nav-collapse");
        nav.show();
    } 
    else {
        nav.removeClass("top-nav-collapse");
        nav.hide();
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