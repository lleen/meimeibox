<template>
  <div class= "nofound">
    <p @click="back">上一层</p>
    <router-link to="/" class="fanghui" >您访问的页面不存在，点此返回首页</router-link>  
  </div>
</template>
<script>
export default {
  name: 'nofound',
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
p{
  background: red;
  height: 80px;
  font-size: 30px;
}
.fanghui{
  font-size: 30px;
  display: block;
  height: 50px;
}
</style>
