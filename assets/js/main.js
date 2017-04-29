//=====Listeners=====
if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function () {
        checkScroll();
        videoBottomPause();
    });
}
(function ($) {
    $('#pm_menu').pushmenu({
        button: "#open"
    });
})(jQuery);

//=====Video Setings=====
function videoBottomPause() {
    var startY = 250;
    var scroll = $(window).scrollTop();
    if (scroll >= startY) {
        $('#play_pause-video').removeClass('fa-pause').addClass('fa-play');
        $("video").get(0).pause();
    }
    var endY = $('.navbar').height() * 2;
    if ($(window).scrollTop() < endY) {
        $('#play_pause-video').removeClass('fa-play').addClass('fa-pause');
        $("video").get(0).play();
    }
}

//=====Video Buttons=====
// Play/Pause
$('#play_pause-video').click(function () {
    $('#play_pause-video').toggleClass('fa-play fa-pause');
    if ($("video").get(0).paused) {
        $("video").get(0).play();
    } else {
        $("video").get(0).pause();
    }
});
// Mute/Unmute
$("#mute-video").click(function () {
    $('#mute-video').toggleClass('fa-volume-up fa-volume-off');
    if ($("video").prop('muted')) {
        $("video").prop('muted', false);
    } else {
        $("video").prop('muted', true);
    }
});


//=====Menu Opacity=====
function checkScroll() {
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
        $('.navbar').addClass("scrolled");
    } else {
        $('.navbar').removeClass("scrolled");
    }
}



//Karuzela
$('.loop').owlCarousel({
    loop: true,
    dots: false,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    animateOut: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5,
        }
    }
});