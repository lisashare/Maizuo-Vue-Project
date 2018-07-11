<template>
    <div class="user page">
        <form v-on:submit.prevent="onSubmit" novalidate>
            <!-- 用户名 -->
            <div class="form-group">
                <input required v-focus v-model.trim="username" 
                    @change="checkname" type="text" class="form-control" placeholder="用户名"> 
                <span class="clear-input" @click="clear01"></span>
                <div class="input-bg"></div>
            </div>
            <span class="wrong-msg-01">{{ wrongMsg01 }}</span>

            <!-- 密码 -->
            <div class="form-group">
                <input required v-model.trim="password" @change="checkpassword" type="password" class="form-control" placeholder="8-18位密码" maxlength="18">
                <span class="clear-input" @click="clear02"></span>
                <div class="input-bg"></div>
            </div>
            <span class="wrong-msg-02">{{ wrongMsg02 }}</span>
            <div class="change">
                <router-link to="/mine/login">手机号登录</router-link> <router-link to="/mine/register">去注册</router-link>
            </div>
            <!-- 提交按钮 -->
            <button type="submit" class="center-block submit">登录</button>
        </form>
    </div>
</template>
<script>
export default {
    name:'User',
    directives: {
        focus: {
            // 指令的定义
            inserted: function (el) {
                el.focus()
            }
        }
    },
    data () {
        return {
            username:'',
            password:'',
            wrongMsg01:'用户名',
            wrongMsg02:'密码',
        }
    },
    methods:{
        checkname(){
            var flag = false;
            if(this.username === ''){
                this.wrongMsg01 = '用户名不能为空'
            }else if(!/^[\w\u4e00-\u9fa5/]{1,16}$/.test(this.username)){
                this.wrongMsg01 = '请输入正确的用户名(字母数字不超过16个)'
            }else{
                this.wrongMsg01 = ''
                flag = true;
            }
            return flag;
        },
        checkpassword:function(){
            var flag = false;
            var pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
            if(this.password===""){
                this.wrongMsg02 = "密码不能为空"
            }else if(!pwdReg.test(this.password)){
                this.wrongMsg02 = "密码不合法";
            }else{
                this.wrongMsg02 = "";
                flag = true;
            }
            return flag;
        },
         clear01(){
            this.username = ''
        },
         clear02(){
            this.password = ''
        },
        onSubmit(){
            if(this.checkname() && this.checkpassword()){
                //注册成功--提示--跳转到用户名登录
                let {username,password} = this;
                let params = {username,password,callback:(result)=>{
                                    //发起请求
                                    if(result === 1){ 
                                        // this.$router.push('my')
                                    }else{
                                        Toast({
                                            message: '注册失败.请稍后再试',
                                            position: 'middle',
                                            duration: 2000
                                        });
                                    }
                                }
                            }
                //输入信息后，调用异步actions方法
                this.$store.dispatch('login',params)   
            } 
        }
    }  
}        
</script>
<style lang="scss" scoped>

</style>



