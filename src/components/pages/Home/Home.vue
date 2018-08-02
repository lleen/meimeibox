<template>
  <div id = "app-home">
    <home-stion></home-stion>
  </div>
</template>

<script>

// 二级路由跳转
import HomeStion from './Stion/HomeStion'

export default {
  name: 'AppHome',
  components: {
    HomeStion
  }
}
</script>
<style>
#app-home{
  display: flex; flex-direction: column;height: 100%;
  /* padding-top: 45px; */
}
</style>

