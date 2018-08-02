<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// 引入Home
import AppHome from './components/pages/Home/Home'

export default {
  name: 'App',
  components: {
    AppHome
  }
}
</script>
<style>

</style>
