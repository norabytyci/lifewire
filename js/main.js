// ANIMATIONS
AOS.init({
    disable: 'tablet'
});

$(document).ready(function() {

    // SLIDER
    $(".slider__content").slick({
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        dots: true
    });

    // SCROLL DOWN
    $(".hero__scroll").on("click", function() {
        $("body, html").animate({
            scrollTop: $('.how').offset().top
        },500)
    });

    var header = $(".header");
    var how = $(".how");
    $(window).on("scroll", function() {
        var scrollTop = $(window).scrollTop();
        var howTop = how.offset().top;
        if(scrollTop > howTop - 20) {
            header.addClass("sticky");
            $('#sticky-phantom').show();
        } else {
            header.removeClass("sticky");
            $('#sticky-phantom').hide();
        }
    });

    // PLAYER
    var playBtn = $(".play-btn");
    var video = $(".video");
    var overlay = $(".overlay");
    var pauseBtn = $(".pause");
    var full = $(".full");
    playBtn.on("click", function() {
        video.trigger('play');
        overlay.addClass("hide");
    });
    video.on("ended", function() {
        overlay.removeClass("hide");
    });
    pauseBtn.on("click", function() {
        video.trigger('pause');
        overlay.removeClass("hide");
    });
    full.on("click", function() {
        var myVideo =  $("video")[0];
        openFullscreen(myVideo);
    });

    function openFullscreen(myVideo) {
        var elem = myVideo
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { 
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { 
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { 
          elem.msRequestFullscreen();
        }
    }

    // Menu mobile
    $(".hamburger").on("click", function() {
        $(this).toggleClass("show");
        $(".header__menu").toggleClass("show");
    })
});