<template>
    <div class="my page">  
       
       <div class="member-top">
        <div class="member-info">
            <div v-if="userInfo.username" class="login">{{ userInfo.username }}</div>
            <div class="member-img">
            </div>
        </div>
        <div class="member-collect">
            <router-link to="/mine/user">登录</router-link>
            <div class="exit" @click="EXIT">注销</div>
        </div>
      </div>
    </div>
</template>
<script>

import {mapState} from 'vuex'
import {mapMutations} from 'vuex'

export default {
    name:'My',
    methods:{
        ...mapMutations(['EXIT'])
    },
    computed:{
        ...mapState({
            userInfo:state=>state.user.userInfo
        })
    }  
}        
</script>
<style lang="scss" scoped>
// 点击登录
.member-info{
    padding-top:0.50rem; 
    .member-img{
        background-color: rgba(0,0,0,0.5);
        background-image: url('/static/images/member_w.png');
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: 60%;
        width: 0.88rem;
        height: 0.88rem;
        margin: 0 auto;
        border-radius: 100%;
        display:block;
    }  
    .login{
        font-size: 0.16rem;
        line-height:0.30rem;
        color:#fff;
    } 
}
// 下面导航
.member-collect{
    color:#fff;
    height:0.66rem;
    background:rgba(0,0,0,.1);
    position: absolute;
    bottom:0;
    width:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.member-top{
    height:2.42rem;
    animation: changeBg 20s infinite;
    background-color: #ED5564;
    background-image: url('/static/images/member_top_bg.png');
    background-size: cover;
    text-align: center;
    width: 100%;
    position: relative;
    z-index: 1;
}
@keyframes changeBg{
    0% {
        background-color: #ED5564;
    }
    10% {
        background-color: #FB6E52;
    }
    20% {
        background-color: #FFCE55;
    }
    30% {
        background-color: #A0D468;
    }
    40% {
        background-color: #48CFAE;
    }
    50% {
        background-color: #4FC0E8;
    }
    60% {
        background-color: #5D9CEC;
    }
    70% {
        background-color: #AC92ED;
    }
    80% {
        background-color: #EC87BF;
    }
    90% {
        background-color: #ED5564;
    }
}
</style>



