<template>
    <div class="home-classify">
        <router-link :to="{name:lipstick}">
            <img :src="big.component_bg_url" alt="">
        </router-link>
        <div class="small-banner">
            <div ref = "classify" class="swiper-container">
                <div class="swiper-wrapper">
                    <router-link tag="div" :to="{name:'datail'}" class="swiper-slide"
                        v-for="(big,i) in big.detail.items"
                        :key="i"
                    >
                        <img :src="big.imgUrl" alt="">
                        <h2>{{big.brandName}}+{{big.name}}</h2>
                        <div class="dprice">
                            <span> ￥{{parseInt(big.price)}}</span>.<span class="pric">00</span>
                        </div>
                        <span class="sale">￥{{big.originPrice}}</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    // 引入Vue
import Vue from 'vue'
// 引入 swiper插件
import Swiper from 'swiper'
    export default { 
        name: 'HomeClassify',
        props:['big'],
        mounted(){
            new Swiper(this.$refs.classify, {
                    slidesPerView: 'auto'
                });
        }
    }
</script>
<style lang="scss" scoped>
    .small-banner{
        .swiper-container{
            width: 100%;
            padding: 0.1rem 0 0.2rem 0.15rem;
            .swiper-slide{
                padding:0 0.07rem;
                height: 1.72rem;
                width: 1.3rem !important;
                display:flex;
                flex-direction: column;
                justify-content: space-between;
                border-right: 1px solid #ccc;
                img{
                    display: block;
                    width: 0.96rem;
                    height: 0.96rem;
                }
                h2{
                    width: 0.9rem;
                    color: #777;
                    font-size: 0.12rem;
                    line-height: 0.13rem;
                    height: 0.28rem;
                    margin-bottom: 3px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .dprice{
                    height: 0.15rem;
                    line-height: 0.15rem;
                    font-size: .15rem;
                    color: #ff5073;
                    .pric{
                        font-size: 0.12rem;
                    }
                }
                .sale{
                    text-decoration: line-through;
                }
            }
            
        }
    }
</style>