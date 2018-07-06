
//过滤器指令
import Vue from 'vue'
// premiere初次上演
Vue.filter('premiere',function(value){  //如果传递的类型是引用类型需要深拷贝
    let date = new Date(value);
    return date.getMonth()+1 +'月'+date.getDate() + '日';
})