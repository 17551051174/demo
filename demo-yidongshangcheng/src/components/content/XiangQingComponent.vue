<template>
    <div class="con">
      <!-- 返回键 -->
      <div class="fanhui">
        <!-- <router-link tag="div" to="/type"> -->
        <div @click="$router.history.go(-1)">
          <i class="iconfont icon-fanhui"></i>
        </div>
          
        <!-- </router-link> -->
      </div>
      <!-- 下方功能条 -->
      <div class="gongnengtiao">
        <div class="gong1">
        <div>
          <i class="iconfont icon-xingxing1"></i> 
          <div>收藏</div> 
        </div>
        
        </div>
        <div class="gong2">
          <div>
            <i class="iconfont icon-shouye"></i>
            <div>小店</div> 
          </div>
         
        </div>
        <div class="gong3">
          <router-link tag="div" :to="'/shop?title='+title+'&price='+price+'&img='+img">
            加入购物车
          </router-link>
          <div>立即购买</div>
        </div>
      </div>


      <!-- 大图 -->
      <div class="img">
        <img :src="img" alt="">
      </div>
      <!-- 广告图 -->
      <div class="img1">
        <img src="https://s11.mogucdn.com/mlcdn/c45406/180316_75538ff4ij5ah01f4he380381agg3_1125x120.jpg" alt="">
      </div>
      <!-- 文字 -->
      <div class="text-1">
        <span>{{title}}</span>
      </div>
      <div class="text2">
        <div>¥</div>
        <div>{{price}}</div>
      </div>
      <div class="text3">
        <span>免邮费</span>
      </div>
      <!-- 黑条 -->
      <div class="heitiao"></div>
      <div class="pingjia">
        <div>
          <div>买家评价 4577 | 销量 3254</div>
          <div>></div>
        </div>
        <div class="yong" v-for="(v,i) in pinglun" :key="i">
          <div class="img">
            <div>
              <img :src="v.user.avatar" alt="">
            </div>
            <div>{{v.user.uname}}</div>
          </div>
          <div class="text">{{v.content}}</div>
          <div class="date">{{v.time}}</div>
          <div class="img2" v-if="(v.images.length)">
            <div v-for="(v,i) in v.images" :key="i">
              <img :src="v" alt="">
            </div>
          </div>
        </div>
      </div>
      <!-- 占位 -->
      <div class="zhanwei"></div>
    </div>
</template>
<script>

import { mapGetters } from 'vuex'

export default {
  name:'XiangQingComponent',
  data(){
    return{
      img:null,
      title:null,
      price:null
    }
  },
  created(){
    this.img=this.$route.query.img;
    this.title= this.$route.query.title;
    this.price= this.$route.query.price;
    this.$store.dispatch('getpinglun',this.$route.query.tradeItemId);
  },
  deactivated(){
    this.$destroy()
  },
  components:{
   
  },
  computed:{
    ...mapGetters([
     'pinglun'
    ])
  }
}
</script>
<style scoped lang="less">
  .con{
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: white;
   overflow: auto;
   z-index: 1;
  //  返回
  .fanhui{
    height: 0.82rem;
    width: 0.82rem;
    position: absolute;
    top: 0;
    left: 0;
    >div{
      height: 0.82rem;
      line-height: 0.82rem;
      width: 0.82rem;
      text-align: center;
      color: red;
    }
  }
  // 功能条
  .gongnengtiao{
    background-color: white;
    width: 100%;
    height: 0.82rem;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    text-align: center;
    
    >.gong1,.gong2{
      flex: 0 0 1.2rem;
      color: #666;
      >div{
        border: 0.0005rem solid #eee;
        padding: 0.15rem
      }
    }
    .gong3{
      flex: 1;
      overflow: hidden;
      div{
        float: left;
        width: 50%;
        height: 0.82rem;
        line-height: 0.82rem;
      }
      div:first-child{
        color: #ff5777;
        background-color: #ffe6e8;
      }
      div:last-child{
        
        color: #ffe6e8;
        background-color: #ff5777;
      }

    }
    
    
  }
  // 占位
  .zhanwei{
    width: 100%;
    height: 0.82rem;
  }
  //  图片
  >.img{
    width: 100%;
    height: 7.7rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  >.img1{
    width: 100%;
    height: 0.7rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  // 文子
  >.text-1{
    margin: 0.2rem 0.2rem 0 0.2rem;
    font-size: 0.3rem;
  }
  >.text2{
    height: 1rem;
    margin: 0 0.2rem;
    div:first-child{
      display: inline-block;
      height: 1rem;
      line-height: 1.4rem;
    }
    div:last-child{
      font-size: 0.72rem;
      height: 1rem;
      display: inline-block;
    }
  }
  >.text3{
    padding: 0.08rem;
    padding-left:0; 
    margin: 0.2rem;
    margin-top: 0;
    margin-bottom: 0.1rem;
    // border-bottom: 0.01rem solid #eee;
  }
  // 黑条
  >.heitiao{
    width: 100%;
    height: 0.2rem;
    background-color: #eee;
  }
  // 评论详情
  >.pingjia{
    margin: 0.2rem;
    >div:first-child{
      display: flex;
      justify-content: space-between;
      >div:first-child{
        flex: 1;
      }
      >div:last-child{
        flex:0 0 0.3rem;
        text-align: right;
      }
    }
    >.yong{
      margin-bottom: 0.3rem;
      border-bottom:0.01rem solid #ccc; 
      >.img{
        height: 0.6rem;
        width: 100%;
        margin: 0.2rem 0 ;
        
        div:first-child{
          width: 0.6rem;
          height: 0.6rem;
          border-radius:0.6rem; 
          display:inline-block;
          // background-color: bisque;
          // vertical-align:middle;
          img{
            border-radius:0.6rem; 
            width: 100%;
            height: 100%;
          }
        }
        div:last-child{
          height: 0.6rem;
          border-radius:0.6rem; 
          display:inline-block;
          // background-color: bisque;
          // vertical-align:middle;
        }
      }
      >.text{
        font-size: 0.25rem;
        color: #555;
      }
      >.date{
        margin: 0.1rem 0; 
        color: #aaa;
      }
      >.img2{
        overflow: auto;
        white-space: nowrap;
        height: 1.7rem;
        div{
          height: 1.6rem;
          width: 1.6rem;
          margin: 0.03rem;
          display: inline-block;
          
        }
        img{
          height: 1.6rem;
          width: 1.6rem;
        }
      }

    }

  }
  }
</style>