$(document).ready(function () {
    $('.menu__burger-img').click(function () {
        $('.menu__burger-img').toggleClass('menu__open');
        $('.header__list').toggleClass('menu__open');
        $('.header__button').toggleClass('menu__open');
        $('.container').toggleClass('color');
    });
});



var mySwiper = undefined;
function initSwiper() {
    var screenWidth = $(window).width();
    if (screenWidth < 1100 && mySwiper == undefined) {
        mySwiper = new Swiper('.mySwiper', {
            slidesPerView: 2,
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
            },
            breakpoints: {
                970: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                10: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            },
        });
    } else if (screenWidth > 1100 && mySwiper != undefined) {
        mySwiper.destroy();
        mySwiper = undefined;
        jQuery('.swiper-wrapper').removeAttr('style');
        jQuery('.swiper-slide').removeAttr('style');
    }
}

//Swiper plugin initialization
initSwiper();

//Swiper plugin initialization on window resize
$(window).on('resize', function () {
    initSwiper();
});
