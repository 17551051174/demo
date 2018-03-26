<template>
    <div class="types">
       <!-- 搜索功能模块 s -->
        <Nav></Nav>
        <!-- 搜索功能模块 e -->
        <!-- 内容 TypeNavVue -->
        <TypeNavVue></TypeNavVue>
        <!-- 内容 TypeNavVue -->
    </div>
</template>
<script>
import Nav from './header/Nav.vue'
import { mapGetters } from 'vuex'
import TypeNavVue from './type/TypeNav.vue';



export default {
  name:'TypeComponent',
  mounted(){
    this.$store.dispatch("getType");
  },
  components:{
    Nav,
    TypeNavVue
  }
}
</script>
<style scoped lang="less">
  .types{
    overflow: hidden;
  }
</style>