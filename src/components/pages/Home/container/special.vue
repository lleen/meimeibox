<template>
    <div class="home-special">
        <uiTitle title="为你推荐">
            <specialBox
                v-for="(special,i) in specials"
                :key="i"
                :data="special"
            >
            </specialBox>
        </uiTitle>
    </div>
</template>
<script>
import UiTitle from '../../../common/Title'
import SpecialBox from './SpecialBox'
export default {
  name: "home-special",
  data() {
    return {
      specials: []
    };
  },
  methods: {
    getSpecial() {
      this.$http
        .get(
          "/meimeimobilev496/view/channelProducts?categoryId=4204&totalCount=20"
        )
        .then((res)=>{
            this.specials = res.data.data.items;
        });
    }
  },
  created(){
      this.getSpecial()
  },
  components: {
      SpecialBox,
      UiTitle
  }
};
</script>
<style lang="scss" scoped>
    .home-special{
        overflow: hidden;
        background-color: #efeff4;
    }
</style>
