<template>
    <div class="type-content">      
        <!-- 分类左边 left -->
        <TypeLeftVue class="left"></TypeLeftVue>
        <!-- 分类左边 left -->


        <!-- 分类右边 right -->
        <TypeRightVue class="right"></TypeRightVue>
        <!-- 分类右边 right -->
    </div>
</template>
<script>
import TypeLeftVue from './left/TypeLeft.vue';
import TypeRightVue from './right/TypeRight.vue';
export default {
  name:'TypeNav',
  components:{
    TypeLeftVue,
    TypeRightVue
  }
}
</script>
<style scoped lang="less">
.type-content{
  border-top: 0.02rem solid #EEEEEE;
  overflow: hidden;
  >.left{
    width: 23.941%;
    float: left;
  }
  >.right{
    float: left;
    width: 76%;
  }
}
</style>