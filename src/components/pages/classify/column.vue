<template>
  <div class="recommend">
    <ul>
      <li 
      v-for = "colu in colu" 
      :key="colu.id"  
      @click="spread(colu.id)"
      :class="[amendClass === colu.id? 'border' : '']"
      ><span>{{colu.title}}</span></li>
    </ul>
    <Ctype :Ct = "Ct"></Ctype>
  </div>
</template>
<script>
import Ctype from './Ctype'
export default {
  name: 'column',
  data () {
    return {
      colu:[{id:1,title:'类目'},{id:2,title:'功效'}],
      amendClass:1,
      Ct:[]
    }
  },
  components: {
    Ctype
  },
  methods: {
    spread (num) {
      this.amendClass = num;
      if(num === 2){
        this.Ct = ['补水保湿','美白','去黑头','控油','祛痘','紧致',
      '抗皱','卸妆','抗老衰','防水','清洁','喷雾','遮瑕','修容','润唇','丰唇',
      '防晒','隔离','持久定妆','防晕染','睫毛增长','眼部装饰',
      '防晒','隔离','持久定妆','防晕染','睫毛增长','眼部装饰',
      '去黑眼圈','去眼袋','去死皮','护手','护发','除味','香氛','装饰','工具','其它']
      }
      if(num === 1){
        this.Ct = ['面膜','洁面卸妆','防晒修复','遮瑕修容','基础底妆','眼部彩妆',
      '唇部彩妆','眉部彩妆','精华精油','身体护理','美发护理','水乳','面霜','眼唇护理','套装礼盒']
      }
    }
  },
  created() {
    this.spread(1)
  }
}
</script>
<style scoped lang="scss">
  .recommend{
    padding: 0 0.15rem;
    height: 0.47rem;
    // overflow-x: auto;
    // white-space: nowrap;
    ul{
      background: #fff;
      z-index: 1000;
      width: 100%;
      height: 0.45rem;
      display: flex;
      flex-direction:row;
      position: fixed;
      top: 0;
      left: 0;
      border-bottom:1px solid #ccc;
      li{
        text-align: center;
        width: 50%;
        padding: 0 0.1rem;
        font-size: 0.14rem;
        line-height: 0.45rem;
        height: 100%;
      }
      .border{
        border-bottom: 0.05rem solid #ff5073;
        color: #ff5073;
      }
    }
  }
</style>

