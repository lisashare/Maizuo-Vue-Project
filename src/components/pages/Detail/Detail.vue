<template>
<!-- film.cover.origin 这里会报错是因为，数据没有获取到渲染的时候film是空，film.cover就是undefined，可以在外层添加v-if -->
    <div v-if="film.name" class="detail page">
        <div class="film-img-wrap img-background">
            <img width="100%" :src = "film.cover.origin" alt="film.name">
        </div>
        <div class="film-info">
            <div class="film-introduce">
                影片简介
            </div>
            <div class="film-word"><span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span><span>{{ film.director }}</span></div>
            <div class="film-word"><span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span><span>{{ film.actors | actors }}</span></div>
            <div class="film-word"><span>地区语言：</span><span>{{ film.nation }}<span>(</span><span>{{ film.language }}</span><span>)</span></span></div>
            <div class="film-word"><span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span><span>{{ film.category }}</span></div>
            <div class="film-word"><span>上映日期：</span><span>{{ film.premiereAt|premiere }}上映</span></div>
            <div class="synopsis">{{ film.synopsis }}</div>
        </div>
        <!-- operation操作,经营,运算 -->
        <div class="operation">
            <button class="primary-button">立即购票</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'Detail',
    props:['id'],
    data () {
        return {
            film:{},
            actors:[]
        }
    },
    filters:{
        actors:function(value){ 
            var str = ''
            for(var i = 0;i < value.length;i++){
                if(value[i] !== value[value.length-1]){
                   str += value[i].name + '|'
                }else{
                   str += value[i].name
                }   
            } 
            return str; 
        }
    },
    methods:{
        getItem(){
            this.$http.get('/mz/v4/api/film/' + this.id,{
                params:{__t:Date.now()}
            }).then(res=>{
                this.film = res.data.data.film;
                this.actors = res.data.data.film.actors;
            })
        }   
    },
    created () {
        this.getItem()
    }
}
</script>
<style lang="scss" scoped>
.film-img-wrap{
    width: 375px;
    height: 210.94px;
}
.film-introduce{
    margin:16px auto;
    border-left:16px solid rgb(288,200,156);
    padding-left:4px;
    font-size:16px;
}
.film-word{
    height:18px;
    margin-bottom:10px;
    padding:0 10px 0 20px;
    overflow: hidden;
}
// synopsis概要
.synopsis{
    margin-bottom:80px;
    padding-left:20px;
    padding-right:15px;
    text-indent: 2em;
}
.operation{
    position:fixed;
    left:0;
    bottom:20px;
    width:100%;
    text-align:center;
    .primary-button{
        width:156px;
        height:36px;
        line-height:36px;
        border:none;
        background-color:#fe8233;
        border-radius: 18px;
        color:#fff;
        font-size:14px;
    }
}
</style>
