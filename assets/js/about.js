// document.addEventListener("DOMContentLoaded", function () {
//     new Swiper(".about-history-slider", {
//         slidesPerView: 1.5,
//         spaceBetween: 20,
//         centeredSlides: true,
//         loop: true,
//         speed: 800,
//         autoplay: {
//             delay: 5000,
//             disableOnInteraction: false,
//         },
//         breakpoints: {
//             768: { slidesPerView: 2.5 },
//             1024: { slidesPerView: 3.5 },
//         },
//         navigation: {
//             nextEl: ".about-history-slider .button-next",
//             prevEl: ".about-history-slider .button-prev",
//         },
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.about-history-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        breakpoints: {
            900: {
                slidesPerView: 2,
            },
            1300: {
                slidesPerView: 3,
            }
        }
    });
});

function setEqualTimelineDetailsHeight() {
    const details = document.querySelectorAll('.timeline-details');
    let max = 0;
    details.forEach(el => {
        el.style.height = 'auto'; // reset
        if (el.offsetHeight > max) max = el.offsetHeight;
    });
    details.forEach(el => el.style.height = max + 'px');
}

document.addEventListener('DOMContentLoaded', function () {
    setEqualTimelineDetailsHeight();
    window.addEventListener('resize', setEqualTimelineDetailsHeight);
});