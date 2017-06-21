
//加价购弹窗部分
(function($){

		// 点击加价购显示弹窗
        var open_add_layer_btn = $('.add-btn');
        open_add_layer_btn.click(function(event) {
            add_layer_obj.open();
        });

        // 加价购弹窗：
        var add_layer_obj = {
            layer_box:'.layer-box-cover',
            layer_close_btn :'.close-btn',
            layer_submit_btn:'.submit-btn',
        }
        add_layer_obj.init = function () {
            var _this = this,flag = 1;
            $(this.layer_box).click(function(e) {
                if(e.target === this)
                _this.close();
            });
            $(this.layer_close_btn).click(function(e) {
                _this.close();
            });
            $(this.layer_submit_btn).click(function() {
                if(flag){
                    flag = 0;
                    _this.close();
                    submit_fn();
                }
            });
        }
        add_layer_obj.open = function () {
            $(this.layer_box).addClass('curr');
            this.init();
        }
        add_layer_obj.close = function () {
            $(this.layer_box).removeClass('curr');
        }

})(jQuery);


