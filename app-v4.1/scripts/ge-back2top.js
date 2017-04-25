$(function(){
    $('.ge-comm-back2top').hide();
          
    $(window).scroll(function() {
        if($(window).scrollTop()>100){
            $('.ge-comm-back2top').fadeIn(1500);
        }else{
            $('.ge-comm-back2top').fadeOut(1500);
        }
    });
    $('.ge-comm-back2top').click(function() {
        $('body,html').animate({scrollTop: 0}, 800);
        return false;
    });

    

});

