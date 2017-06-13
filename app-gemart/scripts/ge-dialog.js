;(function($) {

	var geDialog = function (config) {

		var _this_ = this;

		// 默认参数配置
		this.config = {
			// 对话框提示信息
			message:'信息',

			// 是否需要头部以及关闭按钮
			close_btn:false,

			// 点击遮罩层是否关闭
			coverClose:false,

			// 改变遮罩透明度
			opacity:null,

			// 延迟关闭时间
			delay:null,


			// 按钮组
			buttons:null,

			// 自定义层
			zIndex:1,

			
			// 延迟关闭之后的回调
			// delayCallBack: null,

			
		};

		// 默认参数扩展
		if(config && $.isPlainObject(config)){

			$.extend(this.config,config);

		}else{
			// 没有扩展
			this.isConfig = true;
		}


		// 创建基本的DOM
		this._body = $('body');

		// 创建遮罩层
		this.cover = $('<div class="ge-layer-cover">');

		// 创建弹窗
		this.box = $('<div class="ge-layer-box">');

		// 创建头部
		this.header = $('<div class="ge-layer-header">');

		// 创建关闭按钮
		this.header_close = $('<div class="close-btn">');		

		// 创建内容
		this.body = $('<div class="ge-layer-body">');

		// 创建footer
		this.footer = $('<div class="ge-layer-footer">');

		// 渲染DOM
		this.creat();
		
	};


	geDialog.prototype= {
		

		// 创建弹出框
		creat:function () {
			var _this_ = this,
				config = this.config,
				_body = this._body,
				cover = this.cover,
				box = this.box,
				header = this.header,
				closeBtn = this.header_close,
				body = this.body,
				footer = this.footer;

				


			// 判断是否传递了参数
			if(this.isConfig){
				// 没有参数
				body.html(config.message);
				body.appendTo(box);
				box.appendTo(cover);
				cover.appendTo(_body);


			}else{


				// 信息文本
				if(config.message){
					body.html(config.message)
				};

				
				// 是否需要关闭按钮
				if(config.close_btn){
					closeBtn.appendTo(header);
					header.appendTo(box);
					closeBtn.click(function() {
						_this_.close();
					});
				}

				// 点击遮罩层 关闭弹框
				if(config.coverClose){
					cover.click(function() {
						_this_.close();
					});
					box.click(function(e) {
						e.stopPropagation();
					});
				}


				// 设置透明度
				if(config.opacity){
					cover.css('backgroundColor', 'rgba(0,0,0,'+config.opacity+')');
				}

				// 插入到页面
				body.appendTo(box);
				
				

				// 按钮组
				if(config.buttons){
					this.creatButtons(footer,config.buttons);
					footer.appendTo(box);
				}

				

				// 延迟关闭时间
				if(config.delay && config.delay!= 0){
					window.setTimeout(function () {
						_this_.close();

						// 延迟之后的回调
						// config.delayCallBack && config.delayCallBack();
					},config.delay);
				}

				// zIndex
				if(config.zIndex){
					cover.css('zIndex', config.zIndex);
				}


				box.appendTo(cover);
				cover.appendTo(_body);

			}

		},
		creatButtons: function (footer,buttons) {
			var _this_ = this;
			$(buttons).each(function(i) {
				var type = this.type ? this.type : '';
				var text = this.text ? this.text : '按钮'+(++i);
				var callback = this.callback ? this.callback : null;
				var button = $('<div class="'+type+'">'+text+'</div>');
				if(callback){
					button.click(function (e) {
						var isClose = callback();
						// 阻止事件冒泡
						e.stopPropagation();
						if(isClose === false){
						}else{
							_this_.close();
						}
					})
				}else{
					button.click(function (e) {
						e.stopPropagation();
						_this_.close();
					})
				}

				footer.append(button);

			});
		},
		close: function () {
			this.cover.remove();
		}
	};
	// 注册到window对象上，使外层可以访问到Dialog
	window.geDialog = geDialog;

})(jQuery);