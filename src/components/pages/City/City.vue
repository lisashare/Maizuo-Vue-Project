<template>
    <div class="app-city page">
        <div class="gprs-city">
            <div class="city-index-title">
                GPS定位你所在城市
            </div>
            <div class="city-index-detail">
                <ul class="list-unstyled">
                    <li class="city-item-detail city-item-detail-gpr">北京</li>
                </ul>
            </div>
        </div>
        <div class="hot-city">
            <div class="city-index-title">
                热门城市
            </div>
            <div class="city-index-detail">
                <ul class="list-unstyled">
                    <li class="city-item-detail" v-for="(item,i) in hotCity" :key="i">{{ item }}</li>
                </ul>
            </div>
        </div>
        <div class="index-city">   
            <div>
                <div class="city-index-title">
                    按字母排序
                </div>
                <div class="city-index-detail">
                    <ul class="list-unstyled">
                        <li class="city-item-detail" v-for="(en,i) in english" :key="i">{{ en }}</li>
                    </ul>
                </div>
            </div>
            <div class="index-city-list">
                <div>
                    <div class="city-index-title">
                        A
                    </div>
                    <div class="city-index-detail">
                        <ul class="list-unstyled">
                            <li class="city-item-detail">安顺</li>
                            <li class="city-item-detail">安宁</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'AppCity',
    data () {
        return {
            hotCity:['北京','上海','广州','深圳'],
            english:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        }
    }
}
</script>
<style lang="scss" scoped>
.city-index-title{
    padding-left:15px;
    font-size:14px;
    line-height:40px;
    background-color: #ebebeb;
    margin-top:-1px;
}
.city-index-detail{
    background-color: #fff;
    .city-item-detail{
        width:25%;
        font-size:16px;
        line-height:45px;
        text-align:center;
        display: inline-block;
        color:#838383;
        border-bottom:1px solid #ebebeb;
        cursor: pointer;
    }
    .city-item-detail-gpr{
        color:#e2941a;
    }
}
</style>


