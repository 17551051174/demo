<template>
    <div class="nav">
        <router-link tag="div" to="/">
            <i class="iconfont icon-shouye"></i>
            <p>首页</p>
        </router-link>
        <router-link tag="div" to="/type">
            <i class="iconfont icon-fenlei"></i>
            <p>分类</p>
        </router-link>
        <router-link tag="div" to="/shop"> 
            <i class="iconfont icon-gouwuche"></i>
            <p>购物车</p>
        </router-link>
        <router-link tag="div" to="/me">
            <i class="iconfont icon-iconfuzhi"></i>
            <p>我的</p>
        </router-link>  
    </div>
</template>

<script>

    export default {
    name:'NaComponent',
        data(){
            return {

            }   
        }
    }
</script>
<style scoped lang="less">
    @Width:6.38rem;
    @height:0.82rem;
    @color: #666;
    .router-link-exact-active{
        color: #FC5979;
    }
    .nav{
        height: @height;
        color: @color;
        text-align: center;
        background-color:white;
        display: flex;
        justify-content:space-between;
        position: fixed;
        bottom: 0;
        left: 0;
        font-size: 0.2rem;
        width: 100%;
        border-top: 0.01rem solid #ccc; 
        i{
            font-size: 0.39rem;
        }
        p{
            margin: 0;
        }
        div{
            padding: 0.05rem 0rem;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }
    }
</style>


