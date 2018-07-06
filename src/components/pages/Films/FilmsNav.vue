<template>
    <div class="film-list-nav clearfix">
        <div v-for = "_nav in navs" :key = "_nav.id"
        class="nav-theme" :class = "{choosing:type===_nav.type}" 
        @click = "changeType(_nav.type)">
            {{ _nav.theme }}
        </div>
    </div>
</template>
<script>
export default {
    name:'FilmsListNav',
    props:['type','changeType'],
    data () {
        return {
            navs:[
                {id:1,theme:'正在热映',type:'now-playing'},
                {id:2,theme:'即将上映',type:'coming-soon'}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.film-list-nav{  //外侧下边框，里面nav solid
    border-bottom:1px solid #fe6e00;
    .nav-theme{
        float: left;
        width:50%;
        line-height:46px;
        font-size:16px;
        text-align:center;
        cursor:pointer;
        color:#6a6a6a;
        &.choosing{
            color:#fe6e00;
            border-bottom:solid;
        }
    } 
}
</style>

