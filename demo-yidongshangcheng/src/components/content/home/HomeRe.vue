<template>
  <div class="homere">
      <div class="title">
          <p>——— · 热门-市场 · ———</p>
      </div>
      <div class="homere-item">
       
          <div v-for="(v,i) in shilist" :key="i">
              <div class="item-img">
                  <img :src="v.image" alt="">
              </div>
              <div class="item-p">
                  <p>{{v.title}}</p>
              </div>
          </div>   
      </div >
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name:"HomeRe",
  data(){
    return {}
  },
  mounted(){},
  computed:{
    ...mapGetters([
        'shilist'
    ])
  }
}
</script>
<style lang="less" scoped>
    @fontSize:0.25rem;
    .homere{
         text-align: center;
        >.title{
        font-size: @fontSize;
        }
        >.homere-item{
            width: 100%;
            >div{
                display: inline-block;
                // border: 0.001rem solid red;
                width: 21.87%;
                padding: 0.1rem;
            }
            .item-img{
                width: 100%;
                >img{
                    width: 100%;
                }
            }
            .item-p{
                font-size: 0.24rem;
                p{
                    margin: 0;
                    padding: 0;
                }
                
            }
        }
    }
</style>
