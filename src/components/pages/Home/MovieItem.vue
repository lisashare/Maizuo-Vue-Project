<template>
    <div class="movie-item">
        <!-- 即将上映显示分割线的内容 -->
        <div class="dividing-line" v-if = "type.url_type!=='now-playing'">
            <div class="upcoming">即将上映</div>
        </div>
        <ul>
            <li v-for = "film in films" :key = "film.id">
                <router-link class="movie" tag="div" :to="{name:'detail',params:{id:film.id},query:{name:film.name}}">
                    <div class="movie-item-img img-background">
                        <img width="100%" :src="film.cover.origin" :alt = "film.name">
                    </div>
                    <div class="desc clearfix">
                        <div class="info">
                            <div class="title">{{ film.name }}</div>
                            <!-- 根据类型区分显示内容 -->
                            <div class="count" v-if = "type.url_type==='now-playing'">
                                <span class="film-count">{{film.cinemaCount}}</span>家影院上映
                                <span class="person-count">{{ film.watchCount }}</span>人购票
                            </div>
                        </div>
                        <!-- 根据类型区分显示内容 -->
                        <div v-if = "type.url_type=='now-playing'" class="score">{{ film.grade }}</div>
                        <div v-else class="show-date"><span>{{ film.premiereAt|premiere }}</span>上映</div>
                    </div>
                </router-link>
            </li>
        </ul>
        <router-link tag="div" :to = "{name:'films'}" class="more-button">更多{{ type.title }}电影</router-link>
    </div>
</template>
<script>
export default {
    name:'MovieItem',
    props:['type'],
    data () {
        return {
            films:[],
            page:1
        }
    },
    methods:{
        getFilms () {
            let {count,url_type} = this.type;
            let {page} = this;
            
            //跨域问题：域名协议端口都不同不能直接请求到，jsonp前后端结合，cors后端处理，服务端代理webpack帮我们开的localhost:8080,webpack有这个功能帮我们配置跨域
            //https://m.maizuo.com/v4/api/film/now-playing?__t=1523860111012&page=1&count=5
            //有时候偷不到数据，post传参形式诡异，没有接口文档，特殊加密--写个json文件
            this.$http.get('/mz/v4/api/film/'+ url_type,{
                params:{
                    __t:Date.now(),page,count
                }
            }).then(res=>{
             
                this.films = res.data.data.films;
            })
        }
    },
    //初始的获取可以放在create beforeMount 1.初始化阶段自己执行，2获取到数据可以操作，3操作数据不updated，（异步同样执行，updated）不过放在这里逻辑比较清晰
    created () {
        //在这里获取初始的电影数据
        this.getFilms()
    }

}
</script>
<style lang="scss" scoped>
    .movie-item{
        ul{
            padding-top:18px;
            margin-bottom:10px;
            li{
                margin: 0 17px 17px 17px;
                background-color: #f9f9f9;
                box-shadow: 0.5px 0.5px 1px #a8a8a8;
                cursor: pointer;   
            }
        }
        .desc{
            padding:10px 20px 10px 10px;
            .info{
                float:left;
                .title{
                    font-size:12px;
                    line-height:15px;
                }
                .count{
                    font-size:8px;
                    color:#9a9a9a;
                    line-height:15px;
                }
            }
            .score{
                float:right;
                color:#f78360;
                line-height:26px;
                font-size: 18px;
            }
        }
    }
    .show-date{
        float:right;
        font-size:10px;
        line-height:15px;
        height:20px;
        color: rgb(245, 162, 125);
    }
    .more-button{
        width:160px;
        height:30px;
        text-align: center;
        line-height:30px;
        border-radius: 15px;
        border:1px solid #aaa;
        color:#616161;
        margin:10px auto 30px;
        cursor:pointer;
    }
    .dividing-line{
        margin:30px 0;
        border-bottom:1px solid #a8a8a8;
        .upcoming{
            width:65px;
            height:20px;
            line-height:20px;
            margin:0 auto -10px;
            color:#eee;
            background-color:#a7a7a7;
            text-align: center;
            font-size:10px;
            border-radius: 5px;
        }
    }
    .movie-item-img{
        width:341px;
        height:191.81px;
    }
</style>

