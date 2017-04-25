$(function(){
    $(".ge-mart-slide-tab .slide-wrap li").on('click', function(){
        var nav_w=$(this).width();
        // console.log(nav_w);
        $(this).addClass("curr").siblings().removeClass("curr");
        var fn_w = ($(".ge-mart-slide-tab").width() - nav_w) / 2;
        var fnl_l;
        var fnl_x = parseInt($(this).position().left);
        if (fnl_x <= fn_w) {
            fnl_l = 0;
        } else if (fn_w - fnl_x <= flb_w - fl_w) {
            fnl_l = flb_w - fl_w;
        } else {
            fnl_l = fn_w - fnl_x;
        }
        $(".slide-wrap").animate({
            "left" : fnl_l
        }, 200);
    });

    // 计算slide实际宽度
    var fl_w=$('.ge-mart-slide-tab .slide-wrap').width();

    // 计算视口宽度
    var flb_w=$('.ge-mart-slide-tab').width();
    // console.log(fl_w,flb_w);

    var x1,y1,ty_left,x2,y2;

    $('.ge-mart-slide-tab .slide-wrap').on('touchstart', function (e) {
        var touch1 = e.originalEvent.targetTouches[0];
        x1 = touch1.pageX;
        y1 = touch1.pageY;
        // 当前的left值
        ty_left = parseInt($(this).css('left'));
    });
    $('.ge-mart-slide-tab .slide-wrap').on('touchmove', function (e) {
        var touch2 = e.originalEvent.targetTouches[0];
        var x2 = touch2.pageX;
        var y2 = touch2.pageY;
        if(ty_left + x2 - x1>=0){
            // 已经到最左
            $(this).css('left', 0);
        }else if(ty_left + x2 - x1<=flb_w-fl_w){
            // 已经到最右
            $(this).css('left', flb_w-fl_w);
        }else{
            // 在中间
            $(this).css('left', ty_left + x2 - x1);
        }
        if(Math.abs(y2-y1)>0){
            e.preventDefault();
        }
    });

    

});

