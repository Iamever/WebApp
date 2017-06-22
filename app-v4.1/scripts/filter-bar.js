$(document).ready(function(){

	// 筛选条
    var filterBox = $('.ge-goods-list-filter'),
        filterItem = $('.filter-item');

    // 进入页面默高亮综合
        filterBox.find(filterItem).eq(0).addClass('curr');
    
    // 点击筛选条
    filterBox.find(filterItem).find('a').click(function() {
        filterBox.find(filterItem).removeClass('curr');
        $(this).parents(filterItem).addClass('curr');
        var order =  $(this).parents(filterItem).attr('data-order');
        if(order == 1){
            open_item_whole();
            close_item_price();
            close_item_detail();
        }else if(order == 2){
            close_item_whole();
            close_item_price();
            close_item_detail();
        }else if(order == 3){
            open_item_price();
            close_item_whole();
            close_item_detail();
        }else if(order == 4){
            close_item_whole();
            close_item_price();
            open_item_detail();

        }

    });

    // 关闭筛选详情
    function close_item_detail(){
        filterBox.find(filterItem).eq(3).removeClass('curr');
    }

    // 打开筛选详情
    function open_item_detail(){

        tabFn('.filter-detail-box','.filter-name>li','.filter-item>ul');

        check_radio('.filter-detail-box>.filter-item ul>li');

        $('.filter-detail-box .btn-submit').click(function() {
            close_item_detail()
        });
    }

    function check_radio(ele) {
        $(ele).click(function() {
            $(this).addClass('curr').siblings().removeClass('curr');
        });
    }

    function tabFn(wrapClassName,titleClassName,contentClassName){
        var wrap = $(wrapClassName),
            titleItem = wrap.find($(titleClassName)),
            contentItem = wrap.find($(contentClassName));

            $(titleItem[0]).addClass('curr');
            $(contentItem[0]).addClass('curr');
        for(var i = 0;i<titleItem.length;i++){
            titleItem[i].onclick = function(){
                $(this).addClass('curr').siblings().removeClass('curr');
                $(contentItem[$(this).index()]).addClass('curr').siblings().removeClass('curr');

            }
        }
    }


    // 关闭价格筛选条
    function close_item_price(){
        filterBox.find(filterItem).eq(2).removeClass('curr').removeClass('upper');
    }
    // 打开价格筛选条
    function open_item_price(){
        var _this = filterBox.find(filterItem).eq(2),
        className = _this.attr('class');
        _this.toggleClass('upper');
        if(className.indexOf('upper') === -1){
            console.log('价格升序')
        }else{
            console.log('价格降序')
        }

    }


    // 关闭综合筛选条
    function close_item_whole(bool) {
        toggleHover(false);
        if(bool){
            filterBox.find(filterItem).eq(0).removeClass('upper');
        }else{
            filterBox.find(filterItem).eq(0).removeClass('curr').removeClass('upper');
        }
    }

    // 打开综合筛选条
    // 判断子类的高亮
    function open_item_whole(index){
        var _this = filterBox.find(filterItem).eq(0),
        _this_item = _this.find('.filter-selection-box').find('.item'),
        className = _this.attr('class');

        _this.addClass('curr').toggleClass('upper');
        if(className.indexOf('upper') === -1){
            toggleHover(true);
        }else{
            toggleHover(false);
        }
        
        // 综合-子类高亮的index
        if(sessionGetItem()){
            _this_item.removeClass('curr');
            _this_item.eq(sessionGetItem()).addClass('curr');
        }else{
            _this_item.removeClass('curr');
            _this_item.eq(0).addClass('curr');
        }
        _this_item.click(function(event) {
            close_item_whole(true);
            var _index = $(this).index();
            sessionSetItem(_index)
        });
        
    }


    // 设置缓存综合-子类高亮index
    function sessionSetItem(index){
        sessionStorage.setItem('filterWhole',index);
        console.log('综合排序：'+index)
    }

    // 获取缓存综合-子类高亮index
    function sessionGetItem(){
        return sessionStorage.getItem('filterWhole');
    }

    // 遮罩层
    function toggleHover(flag){
        if(flag){
            $('body').append('<div class="ge-hover"></div>');
            $('.ge-hover').click(function() {
                close_item_whole(true);
            });
        }else{
            $('.ge-hover').remove();
        }
    }


	
})