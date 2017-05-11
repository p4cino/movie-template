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
        $('#mute-video').toggleClass('fa-volume-up fa-volume-off');
        $("video").prop('muted', true);
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
//=====Premiere Carousel=====
$('.items').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    nextArrow: '<i class="fa fa-arrow-right"></i>',
    prevArrow: '<i class="fa fa-arrow-left"></i>',
    variableWidth: true,
    adaptiveHeight: true,
    lazyLoad: 'ondemand',
    slidesToScroll: 1,
    arrows: false
});

$('#left').click(function () {
    $('.items').slick('slickPrev');
});

$('#right').click(function () {
    $('.items').slick('slickNext');
});
//=====Premiere Button Hover=====
$(".flex-container")
    .mouseenter(function () {
        $('.button-overlay').show();
    })
    .mouseleave(function () {
        $('.button-overlay').hide();
    });