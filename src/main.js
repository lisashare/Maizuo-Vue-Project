// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//设置页面的rem的计算，放在最上面
import './modules/rem'

import Vue from 'vue'
import App from './App' //引入app模块
import router from './router'

//引入全局scss文件：为什么在js中引入scss文件可以解析
//在webpack中有一个特性，一切皆模块，在这里,webpack检测到scss文件后会编译之后再将其拿出去的（打包的时候判断） 
import './stylesheets/main.scss';

//false 以阻止vue在启动时生成生产提示
Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //在这里配置router是为了让路由里所有的组件都能使用到$router/$route的api
  router,
  //组件在使用之前，必须要注册一下才能用
  components: { App },
  template: '<App/>'
  //相当于将el直接替换成app组件
  //template一个字符串模板作为 Vue 实例的标识使用。模板将会 替换 挂载的元素。挂载元素的内容都将被忽略，除非模板的内容有分发插槽。
})

/*
*　　　　　　　　┏┓　┏┓+ + 
*　　　　　　　┏┛┻━━━┛┻┓ + + 
*　　　　　　　┃　　　　　　  ┃ 　 
*　　　　　　　┃　　　━　　　┃ ++ + + + 
*　　　　　　 ████━████ ┃+ 
*　　　　　　　┃　　　　　　　┃ + 
*　　　　　　　┃　　　┻　　　┃ 
*　　　　　　　┃　　　　　　　┃ + + 
*　　　　　　　┗━┓　　　┏━┛ 
*　　　　　　　　　┃　　　┃　　　　　　　　　　　 
*　　　　　　　　　┃　　　┃ + + + + 
*　　　　　　　　　┃　　　┃　　　　Code is far away from bug with the animal protecting　　　　　　　 
*　　　　　　　　　┃　　　┃ + 　　　　神兽保佑,代码无bug　　 
*　　　　　　　　　┃　　　┃ 
*　　　　　　　　　┃　　　┃　　+　　　　　　　　　 
*　　　　　　　　　┃　 　　┗━━━┓ + + 
*　　　　　　　　　┃ 　　　　　　　┣┓ 
*　　　　　　　　　┃ 　　　　　　　┏┛ 
*　　　　　　　　　┗┓┓┏━┳┓┏┛ + + + + 
*　　　　　　　　　　┃┫┫　┃┫┫ 
*　　　　　　　　　　┗┻┛　┗┻┛+ + + + 
*/