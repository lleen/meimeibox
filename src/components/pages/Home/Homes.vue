<template>
  <div class = "Homes">
    <HomeCarousel></HomeCarousel>
  </div>
</template>
<script>
// home今日精选界面所有东西放在这个文件
// 引入轮播图
import HomeCarousel from './HomeCarousel'

export default {
  name: 'Homes',
  components: {
    HomeCarousel
  }
}
</script>
<style lang="scss">
.Homes{
  flex:1;overflow-x: hidden;
}
</style>
