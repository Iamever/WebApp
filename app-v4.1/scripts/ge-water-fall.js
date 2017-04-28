
// 页面加载时
window.onload = function () {
    waterfall('waterfall','waterfall-item');

    // var dataInt={'data':[{'src':'ad1.jpg'},{'src':'ad2.jpg'},{'src':'goods.jpeg'},{'src':'banner.jpeg'},{'src':'ad2.jpg'},{'src':'goods.jpeg'},{'src':'banner.jpeg'},{'src':'ad2.jpg'},{'src':'goods.jpeg'},{'src':'banner.jpeg'}]};
    var dataInt={'data':[{'src':'ad1.jpg'},{'src':'ad2.jpg'},{'src':'goods.jpeg'},{'src':'banner.jpeg'},{'src':'ad2.jpg'},{'src':'goods.jpeg'},{'src':'banner.jpeg'},{'src':'ad2.jpg'},{'src':'goods.jpeg'},{'src':'banner.jpeg'}]};
    window.onscroll=function(){

        
        if(checkscrollside()){
            var oParent = document.getElementById('waterfall');// 父级对象
            // console.log(dataInt.data.length);
            for(var i=0;i<dataInt.data.length;i++){
                
                var waterfall_item=document.createElement('div'); //添加 元素节点
                waterfall_item.className='waterfall-item';
                oParent.appendChild(waterfall_item);

                var item_wrap = document.createElement('div');
                item_wrap.className = 'item-wrap';
                waterfall_item.appendChild(item_wrap);

                var item_content=document.createElement('div');
                item_content.className='item-content';
                item_wrap.appendChild(item_content);

                var ge_lazy_pic=document.createElement('div');
                ge_lazy_pic.className='ge-lazy-pic';
                item_content.appendChild(ge_lazy_pic);

                var oImg=document.createElement('img');
                oImg.src='images/'+dataInt.data[i].src;
                ge_lazy_pic.appendChild(oImg);

                var text = document.createElement('p');
                text.innerHTML = i;
                ge_lazy_pic.appendChild(text);

            }
            waterfall('waterfall','waterfall-item');
        };
    }
}


/**
 * 检测是否符合滚动加载数据块的条件
 * @return {[bool]} [可以加载数据块的条件是否达到]
 */
function checkscrollside() {
    // 父元素
    var oparent = document.getElementById('waterfall');
    // 所有符合条件的子元素
    var oBoxs = getByClass(oparent,'waterfall-item');
    // 最后一个元素的中间位置 距离body顶部的距离
    var lastBoxTop=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
    // body滚动的距离
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // 窗口可视区域的高度
    var winH = document.body.clientHeight || document.documentElement.clientHeight ;
    // console.log('last-top:'+lastBoxTop + '，body滚动的距离：'+scrollTop + "，可视窗口的高："+winH)
    return (lastBoxTop < scrollTop + winH )? true:false;
    
}

/**
 * 瀑布流效果
 * @param  {[string]} parent [父元素的id]
 * @param  {[string]} box    [里面子元素的class]
 * @return {[type]}        [description]
 */
function waterfall(parent,box) {
    var oparent = document.getElementById(parent);
    var oBoxs = getByClass(oparent,box);

    // 获取每个box的宽度
    var oBoxW = oBoxs[0].offsetWidth;
    var num=Math.floor(document.body.clientWidth/oBoxW);
    // 图片排序
    // 第一行中最矮的
    var hArr = [];
    for (var i=0;i< oBoxs.length; i++) {
        var minArr = oBoxs[i].offsetHeight;
        if(i<num){
            hArr[i]=minArr;
        }else{
            var minH = Math.min.apply(null,hArr);
            var index = getMinIndex(hArr,minH);
            
            oBoxs[i].style.position = 'absolute';
            oBoxs[i].style.top = minH + 'px';
            oBoxs[i].style.width = oBoxW + 'px';
            oBoxs[i].style.left = oBoxs[index].offsetLeft +'px';
            hArr[index] += oBoxs[i].offsetHeight ;
        }
    }
}


/**
 * 获取高度最小的元素的索引
 * @param  {[array]} arr [索引的一个范围数组]
 * @param  {[int]} val [最小值]
 * @return {[int]}     [索引]
 */
function getMinIndex(arr,val) {
    for(var i in arr){
        if(arr[i] === val){
            return i;
        }
    }
}


/**
 * 根据class获取元素
 * @param  {[obj]} parent [父元素对象]
 * @param  {[str]} className [子元素类名]
 * @return {[Array]}           [想要获取的元素的数组]
 */
function getByClass(parent,className) {
    var boxArr = new Array(),
        oElement = parent.getElementsByTagName('*');// 获取父元素下所有的子元素

    // 遍历父元素下所有的元素，然后判断是否是className
    for (var i = 0; i< oElement.length; i++) {
        if(oElement[i].className === className){
            boxArr.push(oElement[i]);
        }
    }

    return boxArr;
}

