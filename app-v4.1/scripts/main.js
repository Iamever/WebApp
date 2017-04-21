
$(".ge-lazy-pic img").lazyload({effect : "fadeIn"});

// $("#sticker").sticky({topSpacing:0});



var banner = new Swiper('.banner-swiper-container', {
	autoplay: 5000,
	wrapperClass :'banner-swiper-wrap',
	slideClass :'banner-swiper-item',
	pagination : '.banner-swiper-dots',
	lazyLoading : true,
	paginationClickable :true,
	loop:true,
})

var s_nav = new Swiper('.nav-swiper-container',{
	wrapperClass :'nav-swiper-wrap',
	slideClass :'nav-swiper-item',

	// freeMode : true,
	slidesPerView : 'auto',
	// spaceBetween :25,
	// slidesOffsetAfter:20,
	// slidesOffsetBefore:20,

	// watchSlidesProgress :true,
	// watchSlidesVisibility : true,

	// slideToClickedSlide:true,

	// loop:true,
	// loopedSlides:7,

	// centeredSlides : true,
	onClick: function(swiper){
    	swiper.slideTo(swiper.clickedIndex);

    	for (var i = 0; i < swiper.slides.length ; i++) {
	        swiper.slides[i].className ='nav-swiper-item'; 
	    }
	    	swiper.clickedSlide.className +=" "+ 'nav-swiper-active'; 
    },
    onInit:function (swiper) {
    	swiper.slideTo(0);
    	swiper.slides[0].className +=" "+ 'nav-swiper-active'; 
    }
})