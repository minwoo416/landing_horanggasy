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
const tourist = new Swiper('.tourist_container .tourist_wrap',{
    slidesPerView:4 ,
    slidesPerGroup:2,
    centeredSlides: true,
    spaceBetween:30,
    loop:true,
    navigation: {
        nextEl: ".tourist_container .swiper-button-next",
        prevEl: ".tourist_container .swiper-button-prev",
    },
})