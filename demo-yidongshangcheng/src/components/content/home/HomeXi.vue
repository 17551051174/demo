<template>
  <div class="homexi">
      <div class="title">
          <p>——— · 猜你喜欢 · ———</p>
      </div>
      <div class="homexi-item" v-for="(v,i) in xilist" :key="i">
          <div class="img">
              <img :src="v.show.img" :alt="v.title">
          </div>
          <div class="text">
              <div v-for="(vv,ii) in v.props" :key="ii">
                  <strong>{{vv}}</strong>
              </div>
          </div>
          <div class="foot">
              <div class="foot1">
                  <strong>{{ v.price }}</strong>
              </div>
              <div class="foot2">
                  <strong>{{ v.sale }}<i class="iconfont icon-xingxing1"></i></strong>
              </div>
          </div>
          
      </div >
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name:"HomeXi",
  data(){
    return {

    }
  },
  mounted(){
    this.$store.dispatch("getLove");
  },
  computed:{
    ...mapGetters([
        'xilist'
    ])
  }
}
</script>
<style lang="less" scoped>
    @fontSize:0.25rem;
    .homexi{
            background-color:#efefef;         
        >.title{

            text-align: center;
            font-size: @fontSize;
            >p{
                margin: 0;
                padding: @fontSize
            }
        }
        >.homexi-item{
            // border: 0.001rem solid red;
            display: inline-block;
            width: 48.441%;
            height: 6rem;
            margin: 0.05rem;
            overflow: hidden;
            background-color:white;
            border-radius: 0.08rem;
            >.img{
                img{
                    width: 100%;
                    height: 4.3rem;
                }
            }
            >.text{
                height: 1rem;
                overflow: hidden;
                margin: 0.05rem;
                >div{
                    background-color: #eff3f6;
                    display: inline-block;
                    margin: 0.05rem;
                    padding: 0.05rem;
                    >strong{
                        color: #5a6f7a;
                    }
                }
            }
            >.foot{
                margin: 0.1rem;
                display: flex;
                justify-content:space-between;
                >.foot1{
                    font-size: .3rem;
                }
                    
                >.foot2{
                    text-align:right;
                    color: #999;

                }
            }
        }
    }
</style>
