import Swiper from 'swiper/bundle';

if (document.querySelector('.swiperForYou')) {
    const breakpoint = window.matchMedia('(max-width: 767px)');

    let swiperForYou = null;

    const breakpointChecker = function () {
        if (breakpoint.matches) {
            if (swiperForYou === null) {
                swiperForYou = new Swiper('.swiperForYou', {
                    autoHeight: true,
                    slidesPerView: 1,
                    pagination: {
                        el: '.forYou__slider .swiper-pagination',
                        clickable: true,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                        },
                    },
                });
            }
        } else {
            if (swiperForYou !== null) {
                swiperForYou.destroy();
                swiperForYou = null;
            }
        }
    };

    breakpointChecker();
    breakpoint.addEventListener('change', breakpointChecker);
}
