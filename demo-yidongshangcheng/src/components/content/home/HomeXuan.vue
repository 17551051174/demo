<template>
  <div class="homexuan-yi">
      <div v-for="(v,i) in yilist" :key="i" class="homexuan-yi-item">
          <img :src="v.image" alt="">
          <p>{{ v.title }}</p>
      </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name:"HomeXuan",
  data(){
      return {

      }
  },
  mounted(){

  },
  computed:{
      ...mapGetters([
          'yilist'
      ])
  }
}
</script>
<style lang="less" scoped>
.homexuan-yi{
    text-align: center;
    width: 100%;
    height: 3.2rem;
    .homexuan-yi-item{
        // border: 0.01rem solid red;
        height: 1.3rem;
        padding: 0.15rem;
        width: 0.9rem;
        display: inline-block;
        img{
            width: 100%;
            height: 0.9rem;
        }
        p{
            margin: 0;
            padding: 0;
        }
    }
}

</style>
