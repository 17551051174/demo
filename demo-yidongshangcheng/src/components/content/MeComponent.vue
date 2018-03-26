<template>
    <div class="text">
        <!-- 返回键 -->
      <div class="fanhui">
        <!-- <router-link tag="div" to="/type"> -->
        <div @click="$router.history.go(-1)">
          <i class="iconfont icon-fanhui"></i>
        </div>
          
        <!-- </router-link> -->
      </div>
      <div class="text1">登录</div>
      <div class="text2"><i class="iconfont icon-weixin"></i>&nbsp;&nbsp;&nbsp;微信登录</div>
      <div class="text3"></div>
      <div class="text4">其他登录方式</div>
      <div class="text5">
          <div>
              <div><i class="iconfont icon-qq"></i></div>
              <div><strong>QQ登录</strong></div>
          </div>
          <div>
              <div><i class="iconfont icon-shouji-tianchong"></i></div>
              <div><strong>免密登录</strong></div>
          </div>
          <div>
              <div><i class="iconfont icon-tubiao211"></i></div>
              <div><strong>帐号登录</strong></div>
          </div>
      </div>
    </div>
</template>
<script>
    export default {
        name:"MeComponent",
        mounted(){
            
        },
        computed:{
           
        },
        components:{
            
        }
    }
</script>
<style scoped lang="less">
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
      color:rgb(9, 187, 7);
    }
  }
.text{
    text-align: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    overflow: auto;
    z-index: 1;
}
    .text1{
        font-size: 0.5rem;
        margin: 1.1rem;
    }
    .text2{
        font-size: 0.4rem;
        background: rgb(9, 187, 7);
        color: white;
        margin: 0 0.5rem;
        border-radius: 0.5rem;
        height: 0.8rem;
        line-height: 0.8rem;
        i{
            font-size: 0.4rem;
        }
    }
    .text3{
        height: 0.01rem;
        background: #ccc;
        margin: 1rem 3rem;
    }
    .text4{
        font-size: 0.3rem;
        color: #ccc;
    }
    .text5{
        margin: 0.5rem 1rem;
        display: flex;
        justify-content: space-around;
        >div{
            text-align: center;
            width: 1rem;
            height: 1.5rem;
            >div:first-child{
                i{
                    color: #666;
                    font-size: 0.6rem;
                    line-height: 1rem;
                }
                border-radius: 1.5rem;
                border: 0.01rem solid #ccc;
                width: 1rem;
                height: 1rem;
            }
            >div:last-child{
                font-size: 0.2rem;
                color: #666;
            }
        }
    }

</style>