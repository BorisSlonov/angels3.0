import Swiper from 'swiper/bundle';


const swiperResult = new Swiper('.swiperResult', {
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
        nextEl: '.resultNavWrapper .swiper-button-next',
        prevEl: '.resultNavWrapper .swiper-button-prev',
    },
});


