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
    slidesPerView:3 ,
    // slidesPerGroup:2,
    centeredSlides: true,
    spaceBetween:30,
    loop:true,
    navigation: {
        nextEl: ".tourist_container .swiper-button-next",
        prevEl: ".tourist_container .swiper-button-prev",
    },
})
/* 스크롤 이벤트 */
const descriptionTitle = document.querySelector('.description .description_title');
const descriptionImg = document.querySelector('.description .description_left img')
const descriptionP = document.querySelector('.description .description_right')
const floorH3 = document.querySelector('.floor_container h3');
const floor = document.querySelectorAll('.floor_container .floor')
const adText = document.querySelector('.ad .ad_text');
console.log(descriptionTitle,descriptionImg,descriptionP,floorH3);
window.addEventListener('scroll',()=>{
    console.log(window.scrollY)
    if(window.scrollY >= 666) {
        descriptionTitle.classList.add('active');
        descriptionImg.classList.add('active');
        descriptionP.classList.add('active');
        console.log('zz')
    }else{
        descriptionTitle.classList.remove('active');
        descriptionImg.classList.remove('active');
        descriptionP.classList.remove('active');
    }
    /* ------------------ */
    if(window.scrollY >= 1282){
        floorH3.classList.add('active');
        floor.forEach((obj)=>{
            obj.classList.add('active');
        })
    }else {
        floorH3.classList.remove('active');
        floor.forEach((obj)=>{
            obj.classList.remove('active');
        })
    }
    /* ------------------ */
    if(window.scrollY >= 3463){
        adText.classList.add('active');
    }else {
        adText.classList.remove('active');
    }
})