

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

        // 视口宽度
        this.view_width = $(this.config.container).width()

        // slick实际宽度
        this.slick_width = $(this.config.wrap).width();

        // console.log(this.view_width,this.slick_width)

        // 触摸开始时的参数
        this.start_touch = '';
        this.start_x = '';
        this.start_y = '';

        this.click();
        this.touchstart();
        this.touchmove();
    }

    


    TSlick.prototype = {
        /**
         * 点击选项事件
         * @return {[type]} [修改item的left值][修改当前item类，一致来调整高亮]
         */
        click:function(){
            var _this_ = this;
            $(this.config.item).click(function() {
                //wrap 的left值
                var left;
                // 视口中心点
                var center_pointer_width = (_this_.view_width - $(this).width()) / 2;
                // 当前item的left值
                var curr_item_left = parseInt($(this).position().left);

                // 如果item在中心点的左边，则wrap的left值不变
                if (curr_item_left <= center_pointer_width) {
                    left = 0;
                } else if (center_pointer_width - curr_item_left <= _this_.view_width - _this_.slick_width) { // item在中心点的右边，则设置当前item为中心位置
                    left = _this_.view_width - _this_.slick_width;
                } else {
                    left = center_pointer_width - curr_item_left;
                }
                $(_this_.config.wrap).animate({left: left}, 200);
                $(this).addClass('curr').siblings().removeClass('curr');
            });

        }
        /**
         * 触摸开始
         * @return {[type]} [description]
         */
        ,touchstart:function(){
            var _this_ = this;
            $(this.config.wrap).on('touchstart', function(e) {
                _this_.start_x = e.originalEvent.targetTouches[0].pageX;
                _this_.start_y = e.originalEvent.targetTouches[0].pageY;
                _this_.start_left = parseInt($(this).css('left'));
            });

        }
        /**
         * [触摸移动]
         * @return {[type]} [description]
         */
        ,touchmove:function(){
            var _this_ = this;
            $(this.config.wrap).on('touchmove', function(e) {
                var move_touch = e.originalEvent.targetTouches[0];
                var move_x = move_touch.pageX;
                var move_y = move_touch.pageY;

                if(_this_.start_left + move_x - _this_.start_x>=0){
                    // 已经到最左
                    $(this).css('left', 0);
                }else if(_this_.start_left + move_x - _this_.start_x <= _this_.view_width - _this_.slick_width){
                    // 已经到最右
                    $(this).css('left', _this_.view_width - _this_.slick_width);
                }else{
                    // 在中间
                    $(this).css('left', _this_.start_left + move_x - _this_.start_x);
                }

                if(Math.abs(move_y - _this_.start_y)>0){
                    e.preventDefault();
                }
                
            });
        }
    }

    window.TSlick = TSlick;

})($);

