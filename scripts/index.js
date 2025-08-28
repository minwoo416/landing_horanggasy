const banner = new Swiper('.banner_container .banner', {
    pagination: {
        el: ".banner_container .swiper-pagination",
    },
});
const room = new Swiper('.room_container .room',{
    pagination: {
        el: ".room_container .swiper-pagination"
    },navigation: {
        nextEl: ".room_container .swiper-button-next",
        prevEl: ".room_container .swiper-button-prev",
    },
    slidesPerView:3,
    spaceBetween:20,
})