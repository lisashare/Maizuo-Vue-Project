<template>
    <div class="films page">
        <films-nav :type = "type" :change-type = "changeType"></films-nav>
        <films-box :type = "type"></films-box>
        <back-top size="small" v-back-top:click></back-top>
    </div>
</template>
<script>
import FilmsNav from './FilmsNav'
import FilmsBox from './FilmsBox'
export default {
    name:'Filmes',//构建虚拟dom时，组件，Vue方便查找
    components:{FilmsNav,FilmsBox},
    data () {
        return {
            type:'now-playing'
        }
    },
    methods:{
        changeType(type){
            //执行函数type改变
            this.type = type;
        }
    }
}
</script>
<style lang="scss" scoped>
.films{
    padding-left:15px;
    padding-right:15px;
    background-color:#f9f9f9;
    min-height:100%;   
}
</style>

