/**
 * 使用插件：
 * Jquery
 * jieyou_lazyload
 * layer
 */
$('.ge-radio-green,.ge-check-main').click(function() {
	$(this).toggleClass('checked');
});
$('.go2pay').click(function() {
	  //页面层
	  layer.open({
	    type: 1
	    ,content: '<input class="password" type="password" placeholder="请输入内购密码"/>'
	    ,anim: 'up'
	    ,style: 'width:80%;border-radius:0.1rem;'
	    ,btn: ['确定','取消']
	    ,className:'ge-layer-1'
	    ,yes: function(index){
		  layer.open({
		    content: '密码错误'
		    ,skin: 'msg'
		    ,time: 2 
		  });
		}  
	  });
});



$('.ge-lazy-pic img').lazyload({effect : 'fadeIn'});

$('.ge-comm-slick').slick({
	arrows:false,
	lazyLoad:'ondemand',
	autoplay:5000,
	dots:true,
})

 $("#sticker").sticky({topSpacing:0,zIndex:9});

 $('.ge-comm-back2top').hide();
          
    $(window).scroll(function() {
        if($(window).scrollTop()>100){
            $('.ge-comm-back2top').fadeIn(1500);
        }else{
            $('.ge-comm-back2top').fadeOut(1500);
        }
    });
    $('.ge-comm-back2top').click(function() {
        $('body,html').animate({scrollTop: 0}, 800);
        return false;
    });


// var mySwiper = new Swiper('.ge-mart-slide-tab', {
// 	wrapperClass:'slide-wrap',
// 	slideClass :'slide-item',

// 	slidesPerView :'auto',
// 	spaceBetween :20,

// 	freeMode :true,

// 	onInit:function (swiper) {
// 		// swiper.slides[0].className += ' ' + 'slide-curr' ;
// 	},

// 	onTap:function (swiper) {
// 		for(var i = 0;i < swiper.slides.length ; i++){
// 			// swiper.slides[i].className = 'slide-item';
// 		}
// 		// swiper.slides[swiper.clickedIndex].className += ' ' + 'slide-curr' ;
// 	}
// })
