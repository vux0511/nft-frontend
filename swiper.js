var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         768: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//         },
//         1024: {
//             slidesPerView: 5,
//             spaceBetween: 50,
//         },
//     },
// });
