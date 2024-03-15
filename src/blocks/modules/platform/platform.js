import Swiper from 'swiper/bundle';


const swiperPlatform = new Swiper('.swiperPlatform', {
    autoHeight: true,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
        nextEl: '.platformNavWrapper .swiper-button-next',
        prevEl: '.platformNavWrapper .swiper-button-prev',
    },
});
