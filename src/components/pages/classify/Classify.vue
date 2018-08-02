<template>
  <div class="classify">
    <column></column>
    <Bottom></Bottom>
  </div>
</template>
<script>
// 引入它
import column from './column'

export default {
  name: 'Classify',
  components:{
    column
  }
}
</script>
<style scoped lang = "scss">
classify{
  height: 100%;
}
</style>