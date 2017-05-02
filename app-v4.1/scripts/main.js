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
$('#sticker').sticky({topSpacing:0,zIndex:9});
$('.ge-comm-slick').slick({
	arrows:false,
	lazyLoad:'ondemand',
	autoplay:5000,
	dots:true,
})

 
 /**
  * 首页-秒杀
  */
 var miaosha = new Swiper('#swiper-miaosha', {
	slidesPerView : 3.8,
    spaceBetween : 20,
    slidesOffsetBefore:10,
    slidesOffsetAfter:10,
})

 
 /**
  * 首页 悬浮小动画
  */
 $('.ge-home-animate .switch-btn').click(function() {
 	if($(this).parents('.ge-home-animate').hasClass('show')){
 		$(this).parents('.ge-home-animate').removeClass('show');
 	}else{
 		setTimeout('$(\'.ge-home-animate\').removeClass(\'show\');',3000)
 		$(this).parents('.ge-home-animate').addClass('show');
 	}
 });