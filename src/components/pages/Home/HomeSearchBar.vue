<template>
    <div class="home-search-bar">
        <div class="about">
            <router-link :to="{name:'about'}">
                <i></i>
            </router-link>
        </div>
        <div class="search">
            <icon name="search"></icon>
            <input type="text" placeholder="搜索商品、品牌、功效">
        </div>
        <div class="mess">
            <a href="">
                <icon name="envelope"></icon>
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'HomeSearchBar'
    }
</script>
<style lang="scss" scoped>
    .home-search-bar{
        width: 100%;
        background-color: #fff;
        z-index: 100;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        padding: 0 0.153rem;
        align-items: center;
        .about{
            width: 0.25rem;
            height: 0.44rem;
            display:flex;
            justify-content: space-betwwen;
            align-items:center;
            i{
                display: inline-block;
                width: 0.22rem;
                height: 0.22rem;
                background: url('../../../../static/log.png') no-repeat center center;
                background-size: 100%;
            }
        }
        .search{
            flex: 1;
            height: 0.24rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 0 0.1rem;
            background-color: #eee;
            icon{
                width: 15%;
                display:flex;
                justify-content: center;
                align-items: center;
            }
            input{
                background-color: #eee;
                width: 85%;
                height: 0.22rem;
            }
        }
        .mess{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 0.25rem;
            height: 0.44rem;
            .fa-icon{
                display: inline-block;
                width: 0.22rem;
                height: 0.22rem;
            }
        }
    }
</style>