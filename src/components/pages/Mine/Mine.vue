<template>
    <div class="mine">
        <router-view></router-view>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:'Mine',
    computed:mapState({
        userInfo:state => state.user.userInfo
    }),
    watch:{
        'userInfo.username':{   //监听store(本地缓存)是否存在
            immediate:true,
            handler(newval){
                if(newval){
                    this.$router.replace({name: 'my'})
                }else{
                    this.$router.replace({name: 'user'})
                }
            }
        }
    }
}
</script>
<style lang="scss">
.form-control:valid + .clear-input {display: block;}
.change{
    padding:8px 10px;
    text-align: right;
    a{
        font-size:14px;
    }
}
.page{
    position:absolute;
    width:100%;
    min-height:100%;
    background:#f6f6f6;
    form{
        padding:0 31px;
        .input-top{margin-top:10px;}
        .form-group{
            position: relative;
            margin:15px 0 0;
            .form-control{
                background:#f6f6f6;
                height:34px;
                padding:6px 12px;
                font-size:14px;
                color:#555;
            }
            .input-bg{
                position: absolute;
                top:20px;
                width:100%;
                height:12px;
                border:solid #c4c4c4;
                border-width:0 1px 1px 1px;
            }
        }
        .form-group:first-child{margin-top:30px;}
        .submit{
            width:163px;
            padding:8px 12px;
            font-size:16px;
            color:#fff;
            background:#fe8233;
            border:none;
            border-radius: 36px;
            margin-top:45px;
            outline: none;
        }
    }
}
.center-block{
    display: block;
    margin-left:auto;
    margin-right:auto;
}
.wrong-msg-01,.wrong-msg-02,.wrong-msg-03,.wrong-msg-04{
    display: block;
    height:16px;
    color:#fe8233;
    padding-left:8px;
}
.vercode-clear{
    right:120px!important;
}
.clear-input{
    display: none;
    position: absolute;
    top: 50%;
    right: 15px;
    width: 15px;
    height: 15px;
    margin-top: -8px;
    border-radius: 50%;
    background-color: #ccc;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    cursor: pointer;
}
.clear-input:before {
    width: 70%;
    height: 2px;
}
.clear-input:before{
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #fff;
}

.clear-input:after {
    width: 2px;
    height: 70%;
}
.clear-input:after {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #fff;
}
.sendcode{
    width:112px;
    float:right;
    height:34px;
    padding:5px 0;
    text-align: center;
    // margin-right:20px;
    font-size:15px;
    background:#f6f6f6;
    border:none;
    outline:none;
}
</style>
