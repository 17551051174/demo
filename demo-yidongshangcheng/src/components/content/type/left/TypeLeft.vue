<template>
<div class="type-v"> 
    <div class="type-left">
        <!-- 分类 s-->
        <div v-for="(v,i) in type" :key="i" @click="getTypes(v.maitKey,v.miniWallkey,i)">
            <p  :class=" i==flag ?'cooloor':''">{{v.title }}</p>
        </div>
        <!-- 分类 e-->
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name:'TypeLeft',
  data(){
    return {
       flag:0
    }   
  },
  mounted(){
    //   this.$store.dispatch('getType');
        this.$store.dispatch('getTypes',{n:'41888',s:'10062603'});
  },
  components:{},
  computed:{
      ...mapGetters([
          'type'
      ])
  },
  methods:{
      getTypes( n,s,i){
        this.$store.dispatch('getTypes',{n,s});
        this.flag = i;
      }
  }

}
</script>
<style scoped lang="less">
.type-v {
    height: 9.7rem;
    overflow: auto;
}
.type-left{
    >div{
    background-color: #EEEEEE;
        text-align: center;
        font-size: 0.26rem;
        padding: 0.2rem 0;
        >p{
            margin: 0;
            padding: 0;
        }
    }
}
.cooloor{
    color: #FF5577;
    border-left:0.06rem solid #FF5577;
}
</style>