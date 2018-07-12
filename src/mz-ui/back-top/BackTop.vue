<template>
    <div class="back-top-box" 
        v-scroll-hide = "isShow" 
        scroll-hide-distance = "300">

        <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
            <div v-show="isShow" class="back-top animated">
                <i class="fa fa-angle-double-up"></i>
            </div>
       </transition>
    </div>
</template>

<script>
export default {
    name:"BackTop",
    data(){
        return {
            isShow:false
        }
    }
    // props:['size'] //如果不接收参数，size属性会自动添加在最外层div上 :size = "size"
    // mounted () { //不便于复用，复用封装成组件监听滚动条的一个逻辑，操作bom dom 
    //    window.onscroll = function(){
    //    }
    //}
}
</script>
<style lang="scss" scoped>
// css引入方式
@import './index.scss';

</style>
