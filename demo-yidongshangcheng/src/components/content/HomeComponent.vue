<template>
  <div>
    <!-- 搜索功能模块 s -->
    <Nav></Nav>
    <!-- 搜索功能模块 e -->


    <!-- 轮播图 s-->
   	<HomeBanner></HomeBanner>
    <!-- 轮播图 e-->


    <!-- 选项 s-->
	<HomeXuan></HomeXuan>
    <!-- 选项 e-->	


	<!--促销  s-->
	<HomeChuVue></HomeChuVue>
	<!--促销  e-->


	<!-- 灰条 s-->
	<div class="huitiao"></div>
	<!-- 灰条 e-->


	<!-- 热门市场 s-->
	<HomeRe></HomeRe>
	<!-- 热门市场 e-->		


	<!-- 猜你喜欢 s-->
	<HomeXi></HomeXi>
	<!-- 猜你喜欢 e-->

	<!-- 占位 -->
	<div class="zhanwei"></div>
	<!-- 占位 -->
	
	</div>
</template>
<script>
// 引入搜索功能模块
import Nav from './header/Nav';
import HomeBanner from './home/HomeBanner'
import HomeXuan from './home/HomeXuan'
import HomeChuVue from './home/HomeChu.vue';
import HomeRe from './home/HomeRe'
import HomeXi from './home/HomeXi'

export default {
	name:'HomeComponent',
	mounted(){
		this.$store.dispatch("getBanner");
	},
	components:{
		Nav,
		HomeBanner,
		HomeXuan,
		HomeChuVue,
		HomeRe,
		HomeXi
	}
}

</script>
<style scoped lang="less">

	.huitiao{
		width: 100%;
		height: 0.2rem;
		background: #efefef;
	}
	.zhanwei{
		height: 0.84rem;
	}
</style>
