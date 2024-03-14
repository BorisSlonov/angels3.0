import Swiper from 'swiper/bundle';


const swiperReviews = new Swiper('.swiperReviews', {
    autoHeight: true,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
        nextEl: '.reviewsNavWrapper .swiper-button-next',
        prevEl: '.reviewsNavWrapper .swiper-button-prev',
    },

    // breakpoints: {
    //     767: {
    //         slidesPerView: 2,
    //         spaceBetween: 40,
    //         slidesPerGroup: 2
    //     },
    // }
});

