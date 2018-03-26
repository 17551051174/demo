<template>
<div class="header-nav">
    
    <router-link tag="div" to="/me">
        <i class="iconfont icon-icon-"></i>
    </router-link><!-- 微信模块触发器 -->


   <router-link tag="div" to="/shou">
        <div>
            <i class="iconfont icon-fangdajing"></i>
            <strong> 女人</strong>
        </div>
   </router-link><!-- 搜索功能触发器 -->


    <router-link tag="div" to="/shop">
        <i class="iconfont icon-gouwuche"></i>
    </router-link>
    <!-- 购物车功能触发器 -->
</div>
   
</template>
<script>

export default {
  name:'Nav',
  data(){
    return {

    }   
  }
}
</script>
<style scoped lang="less">
    @color: #666;
    @height:0.82rem;
    .header-nav{
        height: @height;
        color: @color;
        background-color:white;
        display: flex;
        justify-content:space-between;
        font-size: 0.25rem;
        width: 100%;
        i{
            font-size: 0.55rem;
        }
        div{
            text-align: center;
            padding: 0.1rem 0rem;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            div{
                text-align: left;
                margin: 0;
                padding: 0.1rem;
                background: #EEEEEE;
                border: 0;
                box-sizing: border-box;
                height: 100%;
                width: 4.5rem;
                border-radius:0.05rem;

                text-indent: 0.1rem;
                i{
                    font-size: 0.3rem ;
                }
            }
        }
    }
</style>


