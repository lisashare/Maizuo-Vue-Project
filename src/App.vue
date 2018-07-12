<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from "@/components/commons/Header/Header"
export default {
  name: 'App',
  components:{AppHeader}
}
</script>

<style>

</style>
