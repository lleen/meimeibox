<template>
  <div class="Ctype">
    <ul>
      <li class="a" v-for="(Ct, i) in Ct" :key="i">
        <a>{{Ct}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Ctype',
  props:['Ct']
}
</script>
<style lang="scss">
  .Ctype{
    margin-top: 45px;
    padding-top: 0.26rem;
    // background: red;
    ul{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      li{
        width:1rem;
        height: 0.4rem;
        margin-right:0.1rem;
        margin-bottom: 0.1rem;
        // background: red;
        color: #434343;
        text-align: center;
        line-height: 0.4rem;
        font-size: 0.16rem;
      }
    }
  }
</style>