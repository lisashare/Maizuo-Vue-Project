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
import FilmsItem from './FilmsItem'
export default {
    name:"FilmsBox",
    props:['type'],
    components:{FilmsItem},
    data () {
        return {
            films:[],
            page:1,count:7
        }
    },
    methods:{
        getFilms(){
            let {page,count,type} = this;
            console.log(type)
            this.$http.get('/mz/v4/api/film/'+ type,{
                params:[page,count]
            }).then(res=>{
                console.log(res)
                this.films = res.data.data.films;
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
