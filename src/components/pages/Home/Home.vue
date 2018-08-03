<template>
  <div id = "app-home">
    <home-search-bar></home-search-bar>
    <home-container></home-container>
  </div>
</template>

<script>
// 引入轮播图
import HomeContainer from './container/HomeContainer'
import HomeSearchBar from './HomeSearchBar'
export default {
  name: 'AppHome',
  components: {
    HomeContainer,
    HomeSearchBar,
  }
}
</script>
<style lang="scss" scoped>
 
</style>