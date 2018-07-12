<template>
<!-- // 外侧浮动未设置宽，都是内容撑开的
//position: fixed;top: 0;right: 0;left: 0;width: auto; // padding:0 1em; 
点击按钮控制显示隐藏的数据，需要一个方法，在列表页面点击其他地方也可以改变隐藏的数据
-->
    <header class="app-header">
        <nav class="toolbar">
            <h1 class="nav-left">
                <div class="toolbar-title-icon" @click = "isNavShow=!isNavShow">
                    <i class="fa fa-align-justify"></i>
                </div>
                <div class="toolbar-title">{{ title }}</div>
            </h1>
            <div class="nav-right">
                <router-link to="/city" class="city">
                    <span class="city-content">{{city}}</span>
                    <i class="fa fa-angle-down"></i>
                </router-link>
                <router-link to="/mine" class="user">
                    <i class="fa fa-user-o"></i>
                </router-link>
            </div>
        </nav>
        <!-- 列表组件 -->
        <!-- 显示隐藏不能在这里判断，动画也不能在这里包 -->
        <!-- <nav-list v-if="isNavShow"></nav-list> -->
        <nav-list :close-nav = "closeNav" :isNavShow = "isNavShow"></nav-list>
    </header>
</template>
<script>
import NavList from './Navlist'
import router from '../../../router'
import bus from '../../../modules/bus.js'

export default {
    name:'AppHeader',
    components:{ NavList },
    data () {
        return {
            city:'北京',
            isNavShow:false,
            title:'卖座电影'
        }
    },
    created () {
        router.beforeEach((to,from,next)=>{
            // console.log(to) //（路由对象）里面有name属性
            // title = to.meta.title
            let title = '卖座电影'
            switch (to.name) {
                case 'films':title = '电影列表';break;
                case 'city':title = '选择城市';break;
                case 'my':title = '个人中心';break;
                case 'user':title = '登录';break;
                case 'login':title = '登录';break;
                case 'not-found':title = '404';break;
                //方法一：详情页中将title放在url地址中，在跳转的时候使用 
                //case 'detail': title = to.query.name;break;
            }
            this.title = title
            next()
        })
        //方法二
        bus.$on('change-title',(title)=>{this.title = title})
    },
    methods:{
        closeNav () {
            this.isNavShow = false;
        }
    }
}
</script>
<style lang="scss" scoped>
.toolbar{
    background: #282828;
    position: fixed;
    z-index: 500;
    top: 0;
    right: 0;
    left: 0;
    /**/ 
    width: auto;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    .nav-left{
       float: left;
       .toolbar-title-icon{
           color:#666;
           float:left;
           width: 48px;
           text-align: center;
           border-right: 1px solid #222;
           box-shadow: 1px 0 1px #363636;
           color: #999;
           i{
               font-size:16px;
           }
       }
       .toolbar-title{
           font-size:14px;
           color:#efefef;
           float:left;
           /**/
           padding:0 1em;
           text-overflow: ellipsis;
           white-space: nowrap;
           overflow: hidden;
       }
    }
    .nav-right{
       float: right; 
       .city{
           float:left;
           padding:0 6px;
           font-size:14px;
           i{
               font-size:12px;
           }
       }
       .user{
           float:left;
           width:48px;
           font-size:16px;
           text-align:center;
       }
    }
}
</style>


