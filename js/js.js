$(document).ready(function () {
    $('.menu__burger-img').click(function () {
        $('.menu__burger-img').toggleClass('menu__open');
        $('.menu__burger-img').toggleClass('menu__remove');
        $('.header__list').toggleClass('menu__open');
        $('.header__button').toggleClass('active');
        $('body').toggleClass('fixed');
    });
});



var mySwiper = undefined;
function initSwiper() {
    var screenWidth = $(window).width();
    if (screenWidth < 1100 && mySwiper == undefined) {
        mySwiper = new Swiper('.mySwiper', {
            slidesPerView: 3,
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
                320: {
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
