<template>
    <router-link class="films-item" tag = "li" :to = "{name:'detail',params:{id:film.id},query:{name:film.name}}">
        <div class="film-item">
            <div class="film-item-img img-background-gif">
                <img width="100%" :src="film.poster.origin" alt="film.name">
            </div>
            <div class="film-desc">
                <div class="film-next-arrow">
                    <i class="fa fa-angle-right"></i>
                </div>
                <div v-if = "type==='now-playing'" class="film-grade">{{ film.grade }}</div>
                <div class="film-name">{{ film.name }}</div>
                <div class="film-info">{{ film.intro }}</div>

                <div v-if = "type==='now-playing'" class="film-count"><span class="film-count-color"><i>{{ film.cinemaCount }}</i>家影院上映</span><span><i>{{ film.watchCount }}</i>人购票</span></div>
                <div v-else class="film-premiere-date">
                    <span>{{ film.premiereAt | premiere }}上映</span>{{ film.premiereAt|day }}
                </div>
            </div>
        </div>
    </router-link>
</template>
<script>
export default {
    name:"FilmsItem",
    props:["type","film"]
}
</script>
<style lang="scss" scoped>
.film-item{
    width:100%;
    height:121px;
    padding:20px 0;
    border-bottom:1px dashed #c9c9c9;
    .film-item-img{
        width: 60px;
        height:82.56px;
        float:left;
        overflow:hidden;
    }
    .film-desc{
        display: inline-block;
        padding-left:15px;
        width:75%;
        .film-next-arrow{
            float:right;
            line-height:29px;
            color:#c6c6c6;
            width:12px;
            text-align: center;
            i{
                font-size:10px!important;
            }
        }
        .film-grade{
            float: right;
            font-size:16px;
            line-height:32px;
            color:#fc7103;
        }
        .film-name{
            font-size:16px;
            line-height:32px;
            color:#000;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .film-info{
            font-size:12px;
            line-height:24px;
            color:#8e8e8e;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .film-count{
            font-size:12px;
            line-height:24px;
            color:#8e8e8e;
            i{
               color:#8aa2bf; 
            }
            .film-count-color{
                margin-right:20px;
            }
        }
        .film-premiere-date{
            color:#ffb375;
            font-size:12px;
            line-height:24px;
            span{
                margin-right:20px;
            }
        }
    }
}
</style>
