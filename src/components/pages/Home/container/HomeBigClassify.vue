<template>
<div>
    <home-classify v-for="(bigcl,i) in bigcls" :key="i" :big="bigcl"></home-classify>
</div>
      
</template>
<script>
    // 引入Vue
import Vue from 'vue'
// 引入 swiper插件
import Swiper from 'swiper'
import HomeClassify from './HomeClassify'
    export default {
        name: 'HomeBigClassify',
        components:{
            HomeClassify
        },
        data (){
            return {
                bigcls: []
            }
        },
        methods: {
            getBigcls(){
                this.$http.get('/meimei/h5/view/channel?id=1').then((res)=>{
                   this.bigcls = res.data.data.components.slice(5);
                })
            }
        },
        created(){
            this.getBigcls()
        }
    }
</script>
