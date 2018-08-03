<template>
    <div class="home-active">
        <div class="home-active-img">
            <router-link :to="{name:'mianmo'}">
                <img :src="active[2].items[0].space_bg" alt="">
            </router-link>
        </div>
        <div class="home-active-bottom">
            <div class="home-active-bl">
                <router-link :to="{name:'half'}">
                    <img :src="active[3].items[0].special_img" alt="" class="half">
                </router-link>
            </div>
            <div class="home-active-br">
                <router-link :to="{name:'coll'}">
                    <img :src="active[3].items[1].special_img" alt="" class="coll">
                </router-link>
                <router-link :to="{name:'hot'}">
                    <img :src="active[3].items[2].special_img" alt="" class="hot">
                </router-link>
                <router-link :to="{name:'email'}">
                    <img :src="active[3].items[3].special_img" alt="" class="email">
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'HomeActive',
        data (){
            return {
                active:[]
            }
        },
        methods: {
            getactive () {
                this.$http.get('/meimei/h5/view/channel?id=1').then((res)=>{
                    this.active = res.data.data.components
                })
            }
        },
        created(){
            this.getactive()
        }
    }
</script>
<style lang="scss" scoped>
    .home-active-img{
        img {
            display: inline-block;
            width: 100%;
            height: 0.95rem;
        }
    }
    .home-active-bottom{
        border: 2px solid #ccc;
        margin: 0.1rem 0.15rem;
        height: 2.1rem;
        display: flex;
        justify-content: space-between;
        .home-active-bl{
            img{
                display: inline-block;
                width: 1.44rem;
                height: 2rem;
            }
        }
        .home-active-br{
            width: 1.9rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .coll{
                width: 1.9rem;
                height: 0.9rem;
            }
            .hot{
                width: 0.9rem;
                height: 1rem;
            }
            .email{
                width: 1rem;
                height: 1rem;
            }
        }
    }
</style>