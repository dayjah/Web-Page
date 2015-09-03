/****** Carousel Animation ******/
whenAvailable($().slick, function () {
    $('.innerCarousel ul').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        variableWidth: true,
        autoplaySpeed: 2000,
    });
});

//Event to trigger the description drop down
$('.innerCarousel ul li').mouseenter(function () {
    $(this).find('.overlay').animate({
    height: 300
    }, 300);
});

//Event to trigger the description drop down
$('.innerCarousel ul li').append('<div class="overlay"></div>');
$('.overlay').css('background-color', 'red');
$('.overlay').mouseout(function () {
    console.log('Test')
    $(this).animate({
        height: 0
    }, 300);
});
