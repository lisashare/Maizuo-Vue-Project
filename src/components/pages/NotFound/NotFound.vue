<template>
    <div class="not-found page">
        <div class="img-background page404">
            <img width="100%" src="../../../../static/images/not-found.jpg" alt="">
        </div>
        <p>这个页面，神秘失踪了...</p>
        <p>不如<router-link to="/home">返回卖座电影首页吧</router-link></p>
    </div>
</template>
<script>
export default {
    name:'NotFound'
}
</script>
<style lang="scss" scoped>
.page404{
    width:85%;
    margin:45px auto 0;
    
}
.not-found{
    p{
        font-size:16px;
        color:#909090;
        text-align: center;
        a{
            font-size:16px;
        }
    }  
}
</style>
