
$(".ge-lazy-pic img").lazyload({effect : "fadeIn"});

// $("#sticker").sticky({topSpacing:0});


var mySwiper = new Swiper('.ge-mart-slide-tab', {
	slidesPerView:'auto',
	spaceBetween:20,
	slidesOffsetBefore:20,
	slidesOffsetAfter:20,

	wrapperClass:'slide-wrapper',
	slideClass:'slide-item',
	slideToClickedSlide:true,

	onTap: function(swiper){
      for (var i = 0; i < swiper.slides.length ; i++) {
	        swiper.slides[i].className ='slide-item'; 
	    }
	    swiper.clickedSlide.className +=" "+ 'curr';
    },
    onInit:function (swiper) {
    	swiper.slides[0].className +=" "+ 'curr';
    }
})
