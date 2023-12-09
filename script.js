var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: true,
    breakpoints: {
        // when window width is >= 320px
        600: {
            slidesPerView: 1,
            spaceBetween: 5
        },
        680: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        // when window width is >= 480px
        900: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        // when window width is >= 640px
        1080: {
            slidesPerView: 4,
            spaceBetween: 15
        }
    },
   
});