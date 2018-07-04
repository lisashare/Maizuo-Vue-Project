document.documentElement.style.fontSize = document.documentElement.clientWidth/3.75 + 'px';
window.onresize = function(){
    document.documentElement.style.fontSize = document.documentElement.clientWidth/3.75+ 'px';
}
//750的设计图，根元素字体大小是200px

//  rem的设置可以写在index.html，因为最开始模板未渲染完，先执行了，不影响 