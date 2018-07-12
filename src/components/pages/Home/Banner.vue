<template>
    <div class="app-banner swiper-container">
        <div class="swiper-wrapper img-background">
            <div class="swiper-slide img-background" 
                v-for = "banner in banners" 
                :key = "banner.id">
                <img v-if = "banner.imageUrl"
                    class="swiper-lazy"
                    width="100%" 
                    :data-src = "banner.imageUrl"   
                    >
                <div class="swiper-lazy-preloader"></div>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        
        <!-- 如果需要导航按钮 
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>-->
        
        <!-- 如果需要滚动条 
        <div class="swiper-scrollbar"></div>-->
    </div>
</template>
<script>
// swiper是banner模块的私有变量，作用域不互通，作用域独立
//如果Home里面要使用的话，也需要单独导入模块，但是webpack只打包一次，方便协同开发
import Swiper from 'swiper'
import '../../../../node_modules/swiper/dist/css/swiper.min.css'

//引入Vue
import Vue from 'vue'

export default {
    name:'AppBanner',
    data () {
        return {
            banners:[]
        }
    },
    mounted () {
        this.$http.get('mz/v4/api/billboard/home?',
        {
            params:{__t:Date.now()}
        }).then(res=>{
            this.banners = res.data.data.billboards;
            Vue.nextTick(()=>{
                new Swiper ('.app-banner', {  //元素名称尽量不要统一写 swiper-container做区分
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false, //触碰后自动切换也不会停止
                    },
                    loop:true,
                    lazy:{  
                        /* 
                        * 设置为true -> 开启图片延迟加载
                        * <img>的src属性改为data-src，class增加一个'swiper-lazy'
                        * <div class="swiper-lazy-preloader"></div>懒加载的gif
                        * 如果直接用div，设置background，对应的改为data-background即可
                        */
                        lazyLoading: true,//启动延迟加载

                    }
                })
            })
        })
    }
}
</script>
<style lang="scss" scoped>
.swiper-container{
    height: 210.94px;
} 
.swiper-silde{
    height: 210.94px;
}
</style>


