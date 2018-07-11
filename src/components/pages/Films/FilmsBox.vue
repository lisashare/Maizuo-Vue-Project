<template>
    <div class="films-box">
        <ul
        v-infinite-scroll = "loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        infinite-scroll-immediate-check="false"
        >
           <films-item 
            v-for = "film of films" :key = "film.id"
            :type = "type" :film = "film"></films-item> 
        </ul>
        <!-- infinite-scroll-disabled="loading"若为真，则无限滚动不会被触发 
     为 HTML 元素添加 v-infinite-scroll 指令即可使用无限滚动。滚动该元素，当其底部与被滚动元素底部的距离小于给定的阈值（通过 infinite-scroll-distance 设置）时，绑定到 v-infinite-scroll 指令的方法就会被触发。
     infinite-scroll-immediate-check 若为真，则指令被绑定到元素上后会立即检查是否需要执行加载方法。在初始状态下内容有可能撑不满容器时十分有用。(与watch冲突，会执行两次，需要切换，所以执行watch)
     -->
    </div>
</template>
<script>
import { Toast,InfiniteScroll } from 'mint-ui'
import FilmsItem from './FilmsItem'

export default {
    name:"FilmsBox",
    props:['type'],
    components:{FilmsItem},
    data () {
        return {
            films:[],       //存放电影的数据
            page:1,count:7, //页数 每页多少条
            loading:false,  //是否正在加载的开关 
            hasMore:false   //是否拥有更多的开关
        }
    },
    methods:{
        getFilms(){   //获取数据
            
            let {type,page,count} = this;
            //开始请求，无限滚动被触发
            this.loading = true;  	
            //提示
            let instance = Toast({
                'message':'正在加载',   //提示内容
                // 'position':'bottom', //提示框位置，默认居中
                'duration':-1,  //持续时间（毫秒），若为-1则不会自动关闭
                'iconClass':'fa fa-cog fa-spin', //icon 图标的类名
                // 'className':''  //Toast 的类名，可以为其添加样式
            })
            //请求
            this.$http.get('/mz/v4/api/film/'+ type,{
                params:[page,count]
            }).then(res=>{
                // console.log(res)
                this.films = this.films.concat(res.data.data.films);
                // 表示请求结束
                this.loading = false
                // 加载完关闭
                instance.close();

                let {current,total} = res.data.data.page;  //从数据中取出当前数据，义工的数据
                if(total-current <= 0){  // 没有更多数据的时候，没有更多
                    this.hasMore = false; 
                    return false;
                }
                //如果还有更多的数据，页面++
                this.page++
            })
        },
    
        loadMore(){
            //如果没有更多了，提示
            if(!this.hasMore){  
                Toast({
                    message:'没有更多了',position:'bottom',duration:1000
                })
                return false;
            }
            this.getFilms()
        },
    },
    // created () {
    //     this.getFilms()  //在watch里面监听执行函数
    // }, 
   watch : { //监听
      type:{
          immediate:true,
          handler(val){
            //切换类型后的操作
            this.page = 1;
            this.films = [];
            this.hasMore = true;
            this.loading = false;
            this.getFilms();  //这里执行请求一次数据，还没回来，页面上判断没有，就又执行一次
          }
      }
  }
}
</script>
<style lang="scss" scoped>

</style>
