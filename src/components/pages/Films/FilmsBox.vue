<template>
    <div class="films-box">
        <ul>
           <films-item 
            v-for = "film of films" :key = "film.id"
            :type = "type" :film = "film"></films-item> 
        </ul>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
import FilmsItem from './FilmsItem'

export default {
    name:"FilmsBox",
    props:['type'],
    components:{FilmsItem},
    data () {
        return {
            films:[],       //存放电影的数据
            page:1,count:7, //页数 每页多少条
        }
    },
    methods:{
        getFilms(){   //获取数据
            
            let {type,page,count} = this;

            let instance = Toast({
                'message':'正在加载',   //提示内容
                // 'position':'bottom', //提示框位置，默认居中
                'duration':-1,  //持续时间（毫秒），若为-1则不会自动关闭
                'iconClass':'fa fa-cog fa-spin', //icon 图标的类名
                // 'className':''  //Toast 的类名，可以为其添加样式
            })
            
            this.$http.get('/mz/v4/api/film/'+ type,{
                params:[page,count]
            }).then(res=>{
                // console.log(res)
                this.films = res.data.data.films;
                instance.close();
            })
        }
    },
    // created () {
    //     this.getFilms()
    // }, 
   watch : { //监听
      type:{
          immediate:true,
          handler(val){
              //切换类型后的操作
            // this.page = 1;
            // this.films = [];
            // this.hasMore = true;
            // this.loading = false;
            this.getFilms();  //这里执行请求一次数据，还没回来，页面上判断没有，就又执行一次
          }
      }
  }
}
</script>
<style lang="scss" scoped>

</style>
