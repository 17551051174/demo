<template>
    <div class="con">
      <!-- 返回 编辑 -->
      <div class="fanhui">
        <router-link tag="div" to="/type">
          <i class="iconfont icon-fanhui"></i>
        </router-link>
        <div class="text" >购物车</div>
        <router-link tag="div" to="/me">
          编辑&nbsp;&nbsp;<i class="iconfont icon-weixin"></i>
        </router-link>
      </div>
      <!-- 内容 -->
      <div class="content">
        <!-- 占位 -->
        <div class="zhanwei"></div>
        <!-- 空 -->
        <div class="kong">
            <div v-if="shopsinfo.length<=0">
              <div>
                <div class="img">
                  <img src="https://s3.mogucdn.com/mlcdn/c45406/180314_0hdd63g1b1a14576deeegbl5hf6f1_800x800.png" alt="">
                </div>
              </div>
              <div class="text">购物车还是空的哦～</div>
             
                <div class="qu">
                  <router-link tag="div" to="/">
                    去逛逛
                  </router-link>  
                </div>
              
            </div>
        </div>
        <!-- shop -->
        <div class="shop" v-for="(v,i) in shopsinfo" :key="i">
          <div class="input1">
            <input type="checkbox" v-model="v.flag" @change="changes()">
          </div>
          <div class="img">
            <img :src="v.img" alt="">
          </div>
          <div class="text">
            <div class="text1">{{v.title}}</div>
            <div class="text2">
              <div>
                <div class="qian">¥{{v.qian}}</div>
                <div class="jia" @click="jia(shopsinfo.indexOf(v),shopsinfo[shopsinfo.indexOf(v)])">+</div>
                <div class="nub"><input @keydown="jisuan(shopsinfo.indexOf(v))" type="number" v-model="v.ge" ></div>
                <div class="jian" @click="jian(shopsinfo.indexOf(v),shopsinfo[shopsinfo.indexOf(v)])">-</div>
              </div>
              <div><i class="iconfont icon-shanchu" @click="shanchu(shopsinfo.indexOf(v))"></i></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 占位 -->
      <div class="zhanwei" aaa  v-if="!(shopsinfo.length<=0)"></div>
      <!-- 下方功能条 -->
      <div class="gongnengtiao1">
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
          <div>共:¥{{Math.round(qian)}}</div>
          <div>立即购买</div>
        </div>
      </div>
      

    </div>
    
</template>
<script>

import { mapGetters } from 'vuex';

export default {
  name:'ShopComponent',
  data(){
    return {
      shop:{
        img:null,
        title:null,
        price:null,
        qian:null,
        flag:false,
        ge:1,
      }
    }   
  },
  mounted(){
    if(this.$route.query.price*1){
      this.shop.img=this.$route.query.img;
      this.shop.title= this.$route.query.title;
      this.shop.price= this.$route.query.price*1;
      this.shop.qian=(this.$route.query.price*1)*1;
      this.$store.dispatch('getshopinfo',this.shop);
    }
  },
  methods:{
    jia(n,m){
      // console.log(n)
      if(m.flag){
        this.changesjia(n);
      }
      this.$store.dispatch('jia',n); 
    },
    jian(n,m){
      if(m.flag){
        this.changesjian(n);
      }
      this.$store.dispatch('jian',n);
    },
    jisuan(){},
    shanchu(n){
      
      this.$store.dispatch('shanchu',n);
      this.changes()
    },
    changes(){
      this.$store.dispatch('changes');      
    },
    changesjian(n){
      this.$store.dispatch('changesjian',n);   
    },
    changesjia(n){
      this.$store.dispatch('changesjia',n);         
    }
  },
  computed:{
    ...mapGetters([
      'shopsinfo',
      'qian'
    ])
  },
  deactivated(){
    this.$destroy()
  },
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
    // 功能条
  .gongnengtiao1{
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
        // font-size: 0.28rem;
        color: #ff5777;
        background-color: #ffe6e8;
      }
      div:last-child{
        color: #ffe6e8;
        background-color: #ff5777;
      }

    }
  }
   //  返回
  .fanhui{
    height: 0.82rem;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    text-align: center;
    color: #888;
    background: #fefefe;
    border-bottom: 0.005rem solid #ddd;
    z-index: 1;
    >div:first-child{
      flex:0 0 1.2rem;
      height: 0.82rem;
      line-height: 0.82rem;
      width: 1.2rem;
     
      // color: red;
    }
    >.text{
      flex: 1;
      font-size: 0.3rem;
      line-height: 0.82rem; 
      
    }
    >div:last-child{
      flex:0 0 1.2rem;
      height: 0.82rem;
      line-height: 0.82rem;
      width: 1.2rem;
     
    }
  }
  // 占位
    .zhanwei{
      height: 0.82rem;
      width: 100%;
    }
  // 内容
  .content{
    width: 100%;
    height: 100%;
    background: #eee;
    overflow: auto;
    .kong{
      >div{
        margin-top: 3rem;
        text-align: center;
        font-size: 0.25rem;
        .img{
          width: 2.3rem;
          height: 2.3rem;
          border-radius: 1.5rem;
          background-color: #ccc;
          margin: 0 auto;
          img{
            border-radius: 1.5rem;
            width: 100%;
            height: 100%;
          }
        }
        .text{
          height: 0.5rem;
          line-height: 0.5rem;
        }
        .qu{
          div{
            border-radius: 0.1rem;
            margin: 0 auto;
            background: #ff5777;
            width: 1.5rem;
            height: 0.5rem;
            line-height: 0.5rem;
            color: #eee;
          }

        }
      }

    }
    .shop{
      display: flex;
      justify-content: space-between;
      padding: 0.2rem;
      border-top:0.01rem solid #ccc;
      border-bottom:0.01rem solid #ccc;
      >div{
        height: 2.5rem;
      }
      >.input1{
        flex:0 0 0.5rem;
        text-align: center
      }
      >.img{
        flex:0 0 1.8rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      >.text{
        flex: 1;
        >.text1{
          // font-size: 0.3rem;
          height: 50%;
          overflow: hidden;
          padding:0 0.1rem;
          // color:deeppink;
          // text-shadow:0.01rem 0.01rem 0.05rem black;
          // text-overflow: ellipsis; 
        }
        >.text2{
          height: 50%;
          padding:0 0.1rem;          
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          >div:first-child{
            flex:0 0 2.5rem;
            display: flex;
            justify-content: space-between;
            // width: 90%;
            text-align: center;
            >div{
              height: 0.5rem;
              line-height: 0.5rem;
            }
            .jia,.jian{
              flex:0 0 0.4rem;
              // border:0.01rem solid deeppink;
              // background: chartreuse;
            }
            .nub{ flex: 1}
            .qian{
              flex:0 0 0.5rem;
              font-size: 0.4rem;
              color: deeppink;
            }
            input{
              width: 0.5rem;
              text-align: center;
            }
          }
          >div:last-child{
            height: 0.5rem;
            line-height: 0.5rem;
            flex: 1;
            // width: 10%;
            text-align: right;
            // font-size: 0.5rem;
          }
        }
      }

    }
  }
}
</style>