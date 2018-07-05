<template>
    <div class="movie-box">
        <movie-item v-for="type in types" :key="type.id" :type="type"></movie-item>
    </div>
</template>
<script>
import MovieItem from './MovieItem'
export default {
    name:'MovieBox',
    components:{MovieItem},
    data () {
        return {
            types:[
                {id:1,url_type:"now-playing",title:'热映',count:5},
                {id:2,url_type:"coming-soon",title:'即将上映',count:3}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

