<template>
  <div class="home page">
    <app-banner />
    <movie-box />
  </div>
</template>

<script>
import AppBanner from './Banner'
import MovieBox from './MovieBox'
export default {
  name: 'Home',
  components:{AppBanner,MovieBox},
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
