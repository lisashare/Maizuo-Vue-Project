//先去下载vue-router全局插件
//配置好需要在根实例里面注册一下
//指定路由切换位置
import Vue from 'vue'   //全局插件需要通过Vue
import Router from 'vue-router'
import Home from '@/components/pages/Home/Home.vue'

Vue.use(Router)  //注册

var router = new Router({
  module:'hash', //history需要后端设置
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
      path:'/city',
      name:'city',
      component:()=>import('@/components/pages/City/City.vue')
    },
    {
      path:'/films',
      name:'films',
      component:()=>import('@/components/pages/Films/Films.vue')
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:()=>import('@/components/pages/Detail/Detail.vue'),
      props: true
    },
    {
      path:'/shop-mall',
      name:'shop-mall',
      component:()=>import('@/components/pages/ShopMall/ShopMall.vue')
    },
    {
      path:'/mine',
      redirect:'/mine/my',
      name:'mine',
      component:()=>import('@/components/pages/Mine/Mine.vue'),
      children:[
        {path:'user',name:'user',component:()=>import('@/components/pages/Mine/User/User.vue')},
        {path:'register',name:'register',component:()=>import('@/components/pages/Mine/Register/Register.vue')},
        {path:'login',name:'login',component:()=>import('@/components/pages/Mine/Login/Login.vue')},
        {path:'my',name:'my',component:()=>import('@/components/pages/Mine/My/My.vue')}
      ]
    },
    {
      path:'/not-found',
      name:'not-found',
      component:()=>import('@/components/pages/NotFound/NotFound.vue')},
    {path:'**',redirect:'/not-found'}//通配符就是没有名字，重定向到not-found
  ]
})
export default router