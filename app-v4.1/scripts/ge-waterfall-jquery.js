
$(window).on('load', function() {
	waterFall()
	var dataInt={'data':[{'src':'ad1.jpg'},{'src':'ad2.jpg'},{'src':'goods.jpeg'},{'src':'banner.jpeg'},{'src':'ad2.jpg'},{'src':'goods.jpeg'},{'src':'banner.jpeg'},{'src':'ad2.jpg'},{'src':'goods.jpeg'},{'src':'banner.jpeg'}]};
	var dataLen = dataInt.data.length;
	$(window).on('scroll', function() {
		if(checkscrollSide){
			$.each(dataInt.data, function(index, val) {
				var waterfall_item = $('<div>').addClass('waterfall-item').appendTo('#waterfall');
				var item_wrap  = $('<div>').addClass('item-wrap').appendTo($(waterfall_item));
				var item_content  = $('<div>').addClass('item-content').appendTo($(item_wrap));
				var pic  = $('<div>').addClass('ge-lazy-pic').appendTo($(item_content));
				var img  = $('<img>').attr('src', 'images/'+ $(val).attr('src')).appendTo($(pic));
				var text  = $('<p>').appendTo($(item_content));
			});
			waterFall()
		}
	});
});



/**
 * 判断是否具备加载条件
 * @return {bool} true 表示具备  false 表示不具备
 */
function checkscrollSide() {
	// 获取最后一个box
	var $lastBox = $('#waterfall>div').last();
	// 获取最后一个box距离顶部的距离以自身高度的一半
	var lastBoxDis = $lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
	// 获取滚动条滚动的距离
	var scrollTop = $(window).scrollTop();
	// 获取可视窗口的高度
	var winH = $(window).height()
	// 如果lastBoxDis 小于可视窗口的高度+滚动条的距离 表示具备加载条件
	return lastBoxDis<(scrollTop+winH)? true :false
}





function waterFall() {
	// 获取每个项
	var $boxs = $('#waterfall>div');
	// 每个项的宽度
	var w = $boxs.eq(0).outerWidth();
	// 列数  
	var cols = Math.floor($(window).width()/w);

	// 用来存储每个项的高度
	var Arr = [];

	$boxs.each(function(index, el) {
		// 获取每个box的高度
		var box_h = $boxs.eq(index).outerHeight();
		if(index<cols){
			// 操作前2个
			Arr[index] = box_h;
		}else{
			// 获取第一排中高度最小的项
			var minArrH =Math.min.apply(null,Arr);
			/**
			 * 获取高度最小项的索引
			 * 参数：数值，数组
			 * return  数值在数组中的索引
			 */
			var minArrIndex = $.inArray(minArrH, Arr);
			// Dom对象转换成jQuery对象
			$(el).css({
				position: 'absolute',
				top: minArrH+ 'px',
				left: minArrIndex*w+ 'px',
				width:w
			});
			Arr[minArrIndex]+= $boxs.eq(index).outerHeight();
		}
	});

}