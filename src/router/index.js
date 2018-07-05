//先去下载vue-router全局插件
//配置好需要在根实例里面注册一下
//指定路由切换位置
import Vue from 'vue'   //全局插件需要通过Vue
import Router from 'vue-router'
import Home from '@/components/pages/Home/Home.vue'

Vue.use(Router)  //注册

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path:'/films',
      name:'films',
      component:()=>import('@/components/pages/Films/Films.vue')
    },
    {
      path:'/not-found',
      name:'not-found',
      component:()=>import('@/components/pages/NotFound/NotFound.vue')},
    {path:'**',redirect:'/not-found'}//通配符就是没有名字，重定向到not-found
  ]
})
