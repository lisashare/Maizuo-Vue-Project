import Vue from 'vue'
import axios from 'axios'
export default  {
    state:{  //存储状态
         userInfo:localStorage.userInfo ? JSON.parse(localStorage.userInfo) : {
            userId:null,
            username:''
        }
    },
    getters:{  //state的计算属性

    },
    mutations:{ //更改state中状态的逻辑，同步操作
        //接收一个state,一个信息
        CHANGE_USER_INFO(state, userInfo) {
            state.userInfo = userInfo
            //本地缓存
            localStorage.userInfo = JSON.stringify(userInfo)
        },
        EXIT(state){      //点击注销按钮，state中的信息清空，并重新缓存
            state.userInfo = {
                username:'',
                userId : null,
            }
            localStorage.userInfo = JSON.stringify(state.userInfo);
        }	
    },
    actions: {// 提交mutation，异步操作
        //参数params,这样只能接收一个参数，解构赋值,登录成功callback
        //登录的异步方法
        login ({commit},{username,password,callback}){
            console.log(this)
            axios.get('../../../static/Json/api.json').then(res=>{
                if(res.data.code === 200){ 
                    //登录成功 更改state里面的数据
                    let userInfo = {username:username,userId:100};//后台返回的数据
                    //更改数据--定义常量，执行mutations方法
                    commit('CHANGE_USER_INFO',userInfo)
                    callback(1);
                }else{
                    callback(0)
                }
            })
        }
    }
}