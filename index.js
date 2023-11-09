
const swiper = new Swiper('.swiper-main', {

    direction: 'horizontal',
    speed: 550,
    loop: true,
    effect: 'fade',
    allowTouchMove: false,

    // If we need pagination
    pagination: {
        el: ".swiper-main .swiper-pagination",
        type: "progressbar",
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // If we need autoplay
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

});


const swiperThumb = new Swiper('.swiper-thumb', {

    direction: 'horizontal',
    speed: 550,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: true,
    allowTouchMove: false,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // If we need autoplay
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

});

const progressBar = document.querySelector('.swiper-pagination');

function animateProgressBar() {
    progressBar.style.width = '0'; // Reset progress bar width
    progressBar.style.transition = 'width 0s'; // Remove transition
    void progressBar.offsetWidth; // Trigger a reflow
    progressBar.style.transition = `width ${swiper.params.autoplay.delay}ms linear`; // Set the transition duration
    progressBar.style.width = '100vw'; // Set progress bar to full width
}

swiper.on('slideChangeTransitionStart', animateProgressBar);

// Start the initial progress bar animation
animateProgressBar();


