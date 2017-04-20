
$(".ge-lazy-pic img").lazyload({effect : "fadeIn"});

var banner = new Swiper('.ge-comm-banner', {
	autoplay: 5000,
	wrapperClass :'banner-wrap',
	slideClass :'banner-item',
	lazyLoading : true,
	pagination : '.banner-dots',
	paginationClickable :true
})



// <div class="ge-mart-banner">
// 		<div class="ge-comm-banner">
// 			<div class="banner-item">
// 				<div class="ge-max-box">
// 					<img data-lazy="images/banner.jpeg" alt="">
// 				</div>
// 			</div>
// 			<div class="banner-item">
// 				<div class="ge-max-box">
// 					<img data-lazy="images/banner.jpeg" alt="">
// 				</div>
// 			</div>
// 		</div>
// 	</div>


// $('.ge-comm-banner').slick({
// 	autoplay:false,
// 	arrows:false,
// 	dots:true,
// 	dotsClass:'ge-dots',
// 	speed:500,
// 	// infinite:false,// 循环
// 	// fade:true,// 淡入淡出
// });

