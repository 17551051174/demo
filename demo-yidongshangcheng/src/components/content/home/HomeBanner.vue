<template>
   <div class="wrap">	
      <swiper :options="swiperOption" ref="mySwiper"> 
        <swiper-slide v-for="(v,i) in banner" :key="i">
          <img :src="v.image_800" alt="图片加载失败">
        </swiper-slide>
        <!-- 分页标签  -->
        <div class="swiper-pagination" slot="pagination"></div> 
      </swiper>
    </div>
</template>
<script>
import { mapState,mapGetters } from 'vuex'
export default {
  name:"HomeBanner",
  data(){
    return {
            swiperOption: {
                //swiper 原生配置
                autoplay: 1000,
                loop : true,
                //分页标签配置
                pagination : '.swiper-pagination',
                paginationClickable :true,
            }
        }  
    },
    mounted(){
		
	},
    computed:{
		...mapGetters([
			'banner'
		])
	},
}
</script>
<style lang="less" scoped>
.wrap{
    height: 2.9rem;
  img{
    width: 100%;
    height: 100%;
  } 
}
.swiper-container-horizontal>.swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction{
  left: -2.5rem;
}
</style>
