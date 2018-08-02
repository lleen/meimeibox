<template>
  <div class = "Homes">
    <HomeCarousel></HomeCarousel>
    <HomeSection></HomeSection>
  </div>
</template>
<script>
// home今日精选界面所有东西放在这个文件
// 引入轮播图
import HomeCarousel from './HomeCarousel'
// 小导航栏
import HomeSection from './HomeSection'

export default {
  name: 'Homes',
  components: {
    HomeCarousel,
    HomeSection
  }
}
</script>
<style lang="scss">
.Homes{
  flex:1;overflow-x: hidden;
}
</style>
