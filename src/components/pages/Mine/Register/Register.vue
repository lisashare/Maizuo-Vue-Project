<template>
    <div class="register page">
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
            <!-- 确认密码 -->
            <div class="form-group">
                <input required v-model.trim="resetpassword" @change="checkresetpassword" type="password" class="form-control" placeholder="确认密码" maxlength="18">
                <span class="clear-input" @click="clear022"></span>
                <div class="input-bg"></div>
            </div>
            <span class="wrong-msg-02">{{ wrongMsg022 }}</span>

            <!-- 手机号 -->
            <div class="form-group">
                <input required v-model.trim="phone" @change='checkphone' type="text" class="form-control" placeholder="手机号" maxlength="11">
                <span class="clear-input" @click="clear03"></span>
                <div class="input-bg"></div>
            </div>
            <span class="wrong-msg-03">{{ wrongMsg03 }}</span>
            
            <!-- 验证码 -->
            <div class="form-group input-top">
                <input required v-model.trim="verCode" @change="checkvercode" type="text" class="form-control" placeholder="验证码" maxlength="6">
                <span class="clear-input vercode-clear" @click="clear04"></span>
                <div class="input-bg"></div>
                <button type="button" :disabled="disabled" @click="onSendVerCode" class="sendcode">{{btntxt}}</button>
            </div>
            <span class="wrong-msg-04">{{ wrongMsg04 }}</span>
            <div class="change">
                <router-link to="/mine/user">用户名登录</router-link> <router-link to="/mine/login">手机号登录</router-link>
            </div>
            <!-- 提交按钮 -->
            <button type="submit" class="center-block submit">注册</button>
        </form>
    </div>
</template>
<script>
export default {
    name:'Register',
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
            disabled:false,
            time:0,
            btntxt:"获取验证码",
            // formMess:{
            //     phone:this.phone,
            //     verCode:this.verCode
            // },
            wrongMsg01:'用户名',
            wrongMsg02:'密码',
            wrongMsg022:'确认密码',
            wrongMsg03:'手机号',
            wrongMsg04:'验证码',
            username:'',
            password:'',
            phone:'',
            verCode:'',
            resetpassword:''
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
        checkresetpassword(){
            var flag = false;
            if(this.password !== this.resetpassword){
                this.wrongMsg022 = '两次输入的密码不一致'
            }else{
                this.wrongMsg022 = ''
                flag = true;
            }
            return flag;
        },
        checkphone(){
            var flag = false;
            var phoneReg =/^1[3|4|5|7|8|9|6]\d{9}$/;
            if(this.phone === ''){
                this.wrongMsg03 = '手机号不能为空'
            }else if(!phoneReg.test(this.phone)){
                this.wrongMsg03 = '请输入有效的手机号码'
            }else{
                this.wrongMsg03 = ''
                flag = true;
            }
            return flag;
        },
        checkvercode(){
            var flag = false;
            if(this.verCode === ''){
                this.wrongMsg04 = '验证码不能为空'
            }else if(!/^\d{6}$/.test(this.verCode)){
                this.wrongMsg04 = '请输入正确的验证码'
            }else{
                this.wrongMsg04 = ''
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
        clear022(){
            this.resetpassword = ''
        },
         clear03(){
            this.phone = ''
        },
         clear04(){
            this.verCode = ''
        },
        onSendVerCode(){
            if(this.checkphone()){
                this.time=60;
                this.disabled=true;
                this.timer();
        //     /*axios.post(url).then(
        //         res=>{
        //         this.phonedata=res.data;
        //     })*/
            }
        },
        timer () {
            if (this.time > 0) {
                this.time--;
                this.btntxt=this.time+"s后重新获取";
                setTimeout(this.timer, 1000);
            } else{
                this.time=0;
                this.btntxt="获取验证码";
                this.disabled=false;
            }
        },
        onSubmit(){
            if(this.checkname() && this.checkpassword()){
                //注册成功--提示--跳转到用户名登录
                
            }
            // var formMess=this.formMess
            // Axios.post(api+"/order/select/reception", formMess)
            // .then(function (res) {
            //     if(res.data.code==200){
            //         console.log(res.data.data);
            //         this.productResult=res.data.data;
            //         this.productResult.length=3;
            //     }else if(res.data.code==400){
            //         alert(res.data.message)
            //     }            
            // }.bind(this))
        } 
    },
    computed:{
       
    }  
}        
</script>
<style lang="scss" scoped>

</style>



