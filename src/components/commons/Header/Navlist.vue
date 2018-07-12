<template>
<!-- 条件渲染 （使用 v-if） 
条件展示 （使用 v-show） 
动态组件 
组件根节点
transition 不能嵌套，这里的遮罩和内容是分开的
// overlay覆盖物
 -->
    <div class="nav-list">
        <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
        > 
        <!-- 遮罩 -->
            <div class="sidebar-container" v-if="isNavShow" @click="closeNav">
                <div class="sidebar-overlay">
                </div>    
            </div>
        </transition>
        <transition  
        enter-active-class="animated slideInLeft" 
        leave-active-class="animated slideOutLeft"> 
        <!-- 导航 -->
            <nav v-if="isNavShow" @click="closeNav">
                <ul>
                    <li v-for="navList in navLists" :key="navList.id">
                        <router-link :to="{name:navList.name}">
                            <!-- {{}}这里不会闪烁，因为脚手架的方式，编译渲染的时候已经编译好的 -->
                            <span>{{ navList.title }}</span>
                            <i class="fa fa-angle-right"></i>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </transition>   
    </div>
</template>
<script>
export default {
    name:'NavList',
    props:['isNavShow','closeNav'],
    data () {
        return {
            navLists:[
                {id:1,title:'首页',name:'home'},
                {id:2,title:'影片',name:'films'},
                {id:3,title:'影院',name:'home'},
                {id:4,title:'商城',name:'shop-mall'},
                {id:5,title:'我的',name:'mine'},
                {id:6,title:'卖座卡',name:'home'}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
// 调节动画时间
.animated{
    animation-duration: 0.7s;
}
.sidebar-container{
    position:fixed;
    top:0;right:0;bottom:0;left:0;
    z-index:501;
    .sidebar-overlay{
       position: absolute;
       top:50px;right:0;bottom:0;left:0;
       background:rgba(0, 0, 0, .5); 
    }
}
nav{
    position:fixed;
    top:50px;right:110px;bottom:0;left:0;
    display: block;
    background:#282828;
    border-top:1px solid #222;
    box-shadow: 0 1px 1px #363636 inset;
    color:#9a9a9a;
    z-index:502;
    a{
        display: block;
        line-height: 50px;
        padding: 0 16px;
        border-bottom: 1px dotted #333;
        i{
            float: right;
            line-height: 50px;
            color: #666;
            font-size: 14px;
        }
    }
}
</style>


