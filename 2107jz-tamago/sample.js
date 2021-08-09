$(document).ready(function(){
    $('.your-class4').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
         autoplay: true,
        // autoplay: false,
        autoplaySpeed: 2000,
    });

});

// カルーセル

var $slide = $(".slide")
    .slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        speed: 1500,
        autoplaySpeed: 3000,
        autoplay: true
    })
    .on({
        beforeChange: function(event, slick, currentSlide, nextSlide) {
            $(".slick-slide", this).eq(currentSlide).addClass("preve-slide");
            $(".slick-slide", this).eq(nextSlide).addClass("slide-animation");
        },
        afterChange: function() {
            $(".preve-slide", this).removeClass("preve-slide　slide-animation");
        }
    });
$slide.find(".slick-slide").eq(0).addClass("slide-animation");



$(function(){
    $("#top_btn").on("click", function(){
        $("html, body").animate({scrollTop: 0 }, 1000, "swing");
    });
});



