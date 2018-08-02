<template>
  <div class="recommend">
    <ul class="recommend-ul">
      <router-link 
        tag ="li" :to="recommends.id" 
        active-class = "border"
        v-for="(recommends,i) in recommend" :key = "i" 
      >
          <span>{{ recommends.title }}</span>
          <!-- <p v-if = "recommends.id == 1"></p> -->
          <p ></p>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

// 今日精选默认
import Homes from '../Homes'

export default {
  name: 'HomeStion',
  components: {
    Homes
  },
  data () {
    return {
      recommend: []
    }
  },
  methods: {
    Rnames () {
     this.$route.name
   },
    getrecommend () {
      this.$http.get('/meimei/h5/view/getchannel?', {
        params: {
          type: 1,
          isNew: 1
        }
      }).then(res => {
        this.recommend = res.data.data
        console.log(this.recommend[1].title)
      })
    }
  },
  created() {
   this.getrecommend()
   console.log(this.$route)
  }
}
</script>
<style lang = "scss">
  .recommend{
    display: flex; flex-direction: column;height: 100%;
    .recommend-ul{
      padding: 0 0.15rem;
      height: 0.47rem;
      overflow-x: auto;
      white-space: nowrap;
      height: 0.45rem;
      display: flex;
      flex-direction:row;
      li{
        padding: 0 0.1rem;
        font-size: 0.14rem;
        line-height: 0.45rem;
        height: 100%;
      }
      .border{
        border-bottom: 0.03rem solid #ff5073;
        color: #ff5073;
      }
    }
  }
</style>
