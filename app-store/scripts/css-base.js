
(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var html = document.documentElement;
        var windowWidth = html.clientWidth;
        
        if(windowWidth >640){
        	html.style.fontSize = 50 + 'px'; // 按照iphone6的尺寸显示在PC端
        }else{
        	html.style.fontSize = windowWidth / 7.5 + 'px';
        }

        // 等价于html.style.fontSize = windowWidth / 750 * 100 + 'px';
    }, false);
})();