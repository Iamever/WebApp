// ge-popup.js

;(function($){

	var Popup = function(ele,config){

		this.ele = ele;

		this.config = {
			// 弹出的方向  上：top    下bottom   左left   右right
			// direction:'bottom',

			// 是否显示遮罩  false/true
			shade:true,

			// 点击遮罩是否关闭   false/true
			shadeClose:true,

			// 遮罩层透明度  小数点
			shadeOpacity:0.5,

			// zindex
			zIndex:99,

			// 是否显示关闭按钮   false/true
			closeBtn:true,

			// 弹出层的高度  接受百分比  
			height:'50%',

			// 设置背景色
			background:'#fff',

		}

		this.config = $.extend({}, this.config, config);

		// 初始化
		this.init();
	};

	Popup.prototype = {

		// 初始
		init: function(){

			this.createDom();
		},

		// 创建DOM结构
		createDom:function () {

			var config = this.config,
				ele = this.ele;

			$(ele).css({
				"position":"fixed",
				"bottom":0,
				"left":0,
				"width":"100%",
				"background-color":config.background,
				"height":config.height,
				"z-index":config.zIndex,
			});

		}
	};

	window.Popup = Popup;
})(jQuery);