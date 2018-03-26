<template>
<!-- 
    超实惠-促销直达
 -->
  <div class="homechu">
      <div class="homechu-text">
          <p>超实惠-促销直达</p>
      </div>
      <div class="homechu-1">
          <div v-for="(v,i) in chuxiaolist" :key="i" :class="'item'+i">
              <div class="p0">
                    <strong class="p1">{{ v.title }}</strong>
                    <p class="p2">{{ v.viceTitle  }}</p>
              </div>
              <div class="p00">
                  <img :src="v.image" alt="">
              </div>
          </div>
      </div >
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name:"Home",
  data(){
      return {}
  },
  mounted(){
    
  },
  computed:{
      ...mapGetters([
          'chuxiaolist'
      ])
  }

}
</script>
<style lang="less" scoped>
@color:#E5E5E5;
@fontSize:0.25rem;
.homechu{
    border-top: 0.01rem solid @color;
    .homechu-text{
        p{
            margin: 0.2rem;
            font-size: @fontSize;
        }
    }
    .homechu-1{
        text-align: center;
        box-sizing: border-box;
        overflow: hidden;
        height: 5.8350rem;
        // width: ;
       > div{
        //    width: 3.195rem;
           width: 49.95%;
           height: 2.9175rem;
           float: left;
           border: 0.001rem solid @color;
            > .p0{
                // border: 0.001rem solid red;
                margin-top:0.2rem;
                > .p1{
                    font-size: 0.25rem;
                }
                > .p2{
                    color: red;
                    margin:0;
                } 
            }
            >div{
                // border: 0.001rem solid red;
                
               > img{
                   width: 2rem;
                   height: 2rem;
                }
            }
        }
        > .item1,.item2{
            // width: 3.195rem;
            height: 1.458rem;
            overflow: hidden;
            >.p0{
                width: 1.6rem;
                height: 1.2rem;
                display: inline-block;
                vertical-align: top;
                
            }
            >.p00{
                width: 40.5%;
                height: 1.458rem;
                display: inline-block;  
                margin: 0.01rem 0;  
                >img{
                    width: 1.4rem;
                    height: 1.4rem;
                }
            }
        }
        > .item3,.item4,.item5{
            // width: 2.13rem
            width: 33.27%;
        }
    }
    
}
</style>