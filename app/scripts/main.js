(function () {
	$('.classify_aside li').click(function() {
		$(this).addClass('current').siblings('li').removeClass('current');
	});

	 $('.banner_slick').slick({
            dots: true,
            autoplay:true,
            autoplaySpeed:5000,
            lazyLoad: 'ondemand',
            cssEase: 'linear',
            infinite:false,
            dots:false,
            prevArrow:'',
            nextArrow:'',
        });

     new Swiper('.swiper-container-3', {
            slidesPerView : 3.3,
            spaceBetween : 10,
        })

     new Swiper('.swiper-container-1', {
            slidesPerView : 1.3,
            spaceBetween : 10,
        })


    if($('.brand_intro').height()<20){
        $('.brand_intro .grand_more').addClass('hidden')
    }else{
        $('.brand_intro').on('click', '.grand_more', function(event) {
            event.preventDefault();
            $(this).parents('.brand_intro').toggleClass('brand_hidden');
        });
    }

    $('#filter_bar li').click(function() {
          $(this).addClass('current').siblings('li').removeClass('current');
        });




    $('.is_radio_button').on('click', '.button_item', function() {
        
        $(this).addClass('current').siblings('').removeClass('current');
    });

    // 我的关注 tab切换
    $('.ge_tab .ge_item').click(function() {
        $(this).addClass('curr').siblings().removeClass('curr');
        var curr_index  =  $(this).index();
        var content_wrap = $(this).parents('.ge_tab_wrap').find('.ge_tab_content');
        $(content_wrap).find('.ge_tab_content_item').eq(curr_index).addClass('curr').siblings().removeClass('curr');
    });

    // 我的关注-取消关注
    $('.toggle_star_wrap .toggle_star').on('click',  function(event) {
        $(this).parents('.toggle_star_wrap').toggleClass('show');
    });
    
    $('.unstar').click(function(event) {
        layer.open({
            content: '已经取消关注'
            ,skin: 'msg'
            ,time: 2 
          });

        // TODO..
    });

    // 返回顶部
        $('.ge_back_top').hide();
          
        $(window).scroll(function() {
            if($(window).scrollTop()>100){
                $('.ge_back_top').fadeIn(1500);
            }else{
                $('.ge_back_top').fadeOut(1500);
            }
        });
        $('.ge_back_top').click(function() {
            $('body,html').animate({scrollTop: 0}, 800);
            return false;
        });


    // 金鹰专柜扫码--支付选择--checklist
    $('.ge_check_list .ge_check_list_item').click(function() {
        $(this).toggleClass('curr');
    });

    // 金鹰专柜扫码--确认支付--弹窗
    $('#go2pay').click(function() {
        layer.open({
            // content: '支付成功,请给营业员确认！'
            content: '支付中，请耐心等待...'
            ,btn: '我知道了'
            // ,className:'ge_layer_ok'
            ,className:'ge_layer_waiting'
          });
    });

})();

