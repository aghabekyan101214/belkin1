// Please, get more info about the slider here: https://swiperjs.com/api/

let swiper = new Swiper('#hero-swiper', {
    autoplay: {
        delay: 5000,
    },
    updateOnWindowResize: true,
    watchOverflow: true
});

let swiper2 = new Swiper('#swiper', {
    watchOverflow: true,
    loop: true,
});
let swiper3 = new Swiper("#swiper-logos", {
    slidesPerView: 6,
    spaceBetween: 10,
    watchOverflow: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        768: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 100
        }
    }
});

// The second slider arrows click handlers

$(".swiper-button-next").click(function(){
    swiper2.slideNext();
});
$(".swiper-button-prev").click(function(){
    swiper2.slidePrev();
});

$(document).ready(function(){

    // Popular products images are clickable
    $(document).on("click", ".clickable", function() {
        let url = $(this).parent().find("a").attr("href");
        window.open(
            `${url}`,
            '_blank' // <- open in new tab.
        );
    });
});

