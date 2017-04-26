
// 页面加载时
window.onload = function () {
    waterfall('waterfall','waterfall-item');
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
    oparent.style.cssText='width:'+oBoxW*num+'px;';
    // console.log(num);
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
            oBoxs[i].style.left = hArr[index].offsetHeight +'px';

            hArr[index] += oBoxs[i].offsetHeight ;
        }
    }
    console.log(hArr);
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

