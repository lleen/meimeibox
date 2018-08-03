<template>
    <div class="special-box">
        <div class="img-box">
            <img width="100%" :src="data.imgUrl" alt="">
        </div>
        <p class="name">{{data.brandName}}+{{data.name}}</p>
        <p class="price">
          <span class="sale">￥{{data.price}}</span>
          <span class="oriprice">￥{{data.originPrice}}</span>
        </p>
    </div>
</template>
<script>
export default {
    name:'SpecialBox',
    props:['data']
}
</script>
<style lang="scss" scoped>
    .special-box{
        float: left;
        width: 45%;
        height: 2.8rem;
        padding: .1rem;
        margin: 0.1rem;
        background-color: #fff;
        border-radius: 5px;
        img{
            display: inline-block;
            width: 100%;
            height: 1.5rem;
        }
        .name{
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .price{
            padding-top: 0.25rem;
            .sale{
                padding-right: 0.15rem;
                color: #ff5073;
                font-size: 0.18rem;
            }
            .oriprice{
                text-decoration: line-through;
                color: #bbb;
            }
        }
        
    }
</style>
