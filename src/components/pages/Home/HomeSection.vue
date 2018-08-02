<template>
  <div class="section">
    <ul>
      <li v-for="(title,i) in title" :key ="i">
        <a :href="title.item_action_url">

          <img :src="title.icon_img">
          <p>{{ title.icon_title }}</p>
          
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
// 引入VUE
// import Vue from 'vue'

export default {
  name: 'AppHomeSection',
  data () {
    return {
      title: []
    }
  },
  methods: {
    gettitle () {
      this.$http.get('/meimei/h5/view/channel?', {
        params: {
          id: 1
        }
      }).then(res => {
        this.title = res.data.data.components[1].items
      })
    }
  },
  created () {
    this.gettitle()
  }
}
</script>

<style scoped lang = "scss">
.section{
  padding: 0 0.15rem;
  height: 0.68rem;
  ul{
    display: flex;
    justify-content:space-between;
    align-content:space-between;
    li{
      width: 20%;
      text-align: center;
      a{
        display: inline-block;
        width: 0.52rem;
        img{
          width: 0.52rem;
          height: 0.52rem;
        }
      }
    }
  }
}
</style>


