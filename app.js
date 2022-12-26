$(".slider__inner").slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false

});
$(".worker__card_list").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: $('.next_arrow'),
    prevArrow: $('.prev_arrow'),
    centerMode: true
})

$(".client__card__list").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,

})

$(".logo__list").slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false

})  

 function mouseScroll(className) {
     $(`.${className}`).on('wheel', (function (e) {
        e.preventDefault();
    
        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    }));
    
 }
 mouseScroll('client__card__list')
 mouseScroll('logo__list')

