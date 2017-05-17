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
    variableWidth: true,
    adaptiveHeight: true,
    lazyLoad: 'ondemand',
    slidesToScroll: 5,
    centerMode: true,
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

//=====Scale Video=====

$(document).ready(function () {
    scaleVideoContainer();
    initBannerVideoSize('.video__container .poster img');
    initBannerVideoSize('.video__container video');
    $(window).on('resize', function () {
        scaleVideoContainer();
        scaleBannerVideoSize('.video__container .poster img');
        scaleBannerVideoSize('.video__container video');
    });
});

function scaleVideoContainer() {

    var height = $(window).height();
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height', unitHeight);

}

function initBannerVideoSize(element) {

    $(element).each(function () {
            $(this).data('height', $(this).height());
            $(this).data('width', $(this).width());
        }
    );
    scaleBannerVideoSize(element);
}

function scaleBannerVideoSize(element) {
    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        videoWidth,
        videoHeight;
    $(element).each(function () {
            var videoAspectRatio = $(this).data('height') / $(this).data('width'),
                windowAspectRatio = windowHeight / windowWidth;
            if (videoAspectRatio > windowAspectRatio) {
                videoWidth = windowWidth;
                videoHeight = videoWidth * videoAspectRatio;
                $(this).css({'top': -(videoHeight - windowHeight) / 2 + 'px', 'margin-left': 0});
            } else {
                videoHeight = windowHeight;
                videoWidth = videoHeight / videoAspectRatio;
                $(this).css({'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px'});
            }
            $(this).width(videoWidth).height(videoHeight);
            $('.video__container video').addClass('fadeIn animated');


        }
    );
}

// Inverse Colors
$("#inverse").click(function () {
    $('body').toggleClass('normal inverse');
    $('#inverse').toggleClass('text-danger text-primary');

    var text = $('#inverse').text();
    Cookies.set('tryb', text, { expires: 7 });

    $("#inverse").text(
        text == "Tryb nocny" ? "Tryb Nocny" : "Tryb nocny");
});

var tryb = Cookies.get('tryb');
var firstClass = 'text-primary';
var secondClass = 'text-danger';

if(decodeURI(tryb) == 'Tryb nocny'){
    $('body').removeClass("normal");
    $('body').addClass("inverse");
    $('#inverse').toggleClass('text-danger text-primary');
    $('#inverse').text("Tryb dzienny");
}