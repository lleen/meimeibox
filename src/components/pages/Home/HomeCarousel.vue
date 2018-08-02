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
          var swiper = new Swiper(this.$refs.Carousel, {
            loop: true,
            autoplay: {
              delay: 2000,
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

<style lang = "scss">
.banner{
  padding: .1rem .153333rem;
  height: 1.93rem;
  img{
    background-color: #fff;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    box-shadow:0px 0px  15px  5px  #ccc;
  }
  .swiper-pagination  {
    .swiper-pagination-bullet {
      width: 5px; height: 5px;
      background: #000;
      vertical-align: middle;
      opacity: .5;
    }
    .swiper-pagination-bullet-active {
      width: 8px; height: 8px;
      background: transparent;
      border: 1px solid #000;
      border-radius: 50%;
    }
  }
}
</style>
