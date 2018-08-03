<template>
  <div class="banner">
    <div class="swiper-container" ref="Carousel">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for = "(Carousels, idx) in Carousel" :key = "idx">
            <img :src="Carousels.banner_img"/>
          </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
// 引入Vue
import Vue from 'vue'
// 引入 swiper插件
import Swiper from 'swiper'

export default {
  name: 'AppHomeCarousel',
  data () {
    return {
      Carousel: []
    }
  },
  methods: {
    getCarousel () {
      this.$http.get('/meimei/h5/view/channel?', {
        params: {
          id: 1
        }
      }).then(res => {
        this.Carousel = res.data.data.components[0].items
        // 这个回调函数会在数据改变时马上时执行
        Vue.nextTick(() => {
          new Swiper(this.$refs.Carousel, {
            loop: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false
            },
            pagination: {
              el: '.swiper-pagination'
            }
          })
        })
      })
    }
  },
  created () {
    this.getCarousel()
  }
}
</script>

<style scoped lang = "scss">
  .banner{
    padding: .1rem .153333rem;
    img{
      background-color: #fff;
      background-size:cover;
      background-position:center center;
      background-repeat:no-repeat;
      box-shadow: 0  0   15px  5px  #ccc;
    }
    span{
      width: 4px;
      height: 4px;
      display: inline-block;
      border-radius: 100%;
      background: #000;
      opacity: .2;
    }
  }
</style>
