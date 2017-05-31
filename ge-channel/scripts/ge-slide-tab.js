




;(function($){

    // 构造函数
    var TSlick = function(config){
        this.config= {
            // 外层div
            container:'.ge-tslick-container',
            // 内层div
            wrap:'.ge-tslick-wrap',
            // 子项
            item:'.ge-tslick-item',
        }

        // 判断是否扩展
        if(config && $.isPlainObject(config)){
            $.extend({},this.config,config)
        }else{
            // 没有扩展
            this.isConfig = true
        }
        this.click();
    }

    // 视口宽度
    TSlick.view_width = $(this.config.container).width();

    // slick实际宽度
    TSlick.slick_width = $(this.config.wrap).width();


    TSlick.prototype = {
        /**
         * 点击选项事件
         * @return {[type]} [修改item的left值][修改当前item类，一致来调整高亮]
         */
        click:function(){
            $(this.config.item).click(function() {
                //wrap 的left值
                var left;
                // 视口中心点
                var center_pointer_left = (this.view_width - $(this).width()) / 2;
                // 当前item的left值
                var curr_item_left = parseInt($(this).position().left);

                // 如果item在中心点的左边，则wrap的left值不变
                if (curr_item_left <= center_pointer_left) {
                    left = 0;
                } else if (fn_w - fnl_x <= flb_w - fl_w) { // item在中心点的右边，则设置当前item为中心位置
                    left = flb_w - fl_w;
                } else {
                    fnl_l = fn_w - fnl_x;
                }



                $(this.config.wrap).animate({left: left}, 200)
                $(this).addClass('curr').siblings().removeClass('curr');
            });

        }
        // 触摸开始
        // touchstart:function(){}
        // 触摸移动
        // touchmove:function(){}
    }

    window.TSlick = TSlick;

   

    

})($);

