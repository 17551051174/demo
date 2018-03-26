<template>

  <div id="app">
    <!-- 存储区 s-->
    <keep-alive>
      <!-- 路由占位 s-->
      <router-view/>
       <!-- 路由占位 e-->
    </keep-alive>
    <!-- 存储区 e-->
    <!-- 导航功能模块 s -->
    <NavComponent></NavComponent>
    <!-- 导航功能模块 e -->
  </div>
</template>

<script>
// 引入导航功能模块
import NavComponent from './components/nav/NavComponent';

export default {
  name: 'App',
  components:{
    NavComponent
  },
 
}
</script>

<style>
 #app{
   font-size: 0.2rem;
 }

</style>
