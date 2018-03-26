<template>
<div class="typeeeeeeee">


<!-- 具体商品分类 s-->
<div class="typecontent">
    <div class="type-items" v-for="(v,i) in types" :key="i">
        <div>
            <img :src="v.image" alt="">
        </div>
        <p>{{v.title}}</p>
    </div>
    
</div>
<!-- 具体商品分类 e-->

 <!-- 另一层商品分类  -->
<div class="type-xuan">
    <div class="type-xuan-type">
        <div v-for="(v,i) in sort" :key="i" @click="getPai(v.sortKey)">
           <p>{{ v.title }}</p>
        </div>     
    </div>
    
    <router-link class="item"  v-for="(vv,ii) in getpai" :key="ii" tag="div" :to="'/xiang?tradeItemId='+vv.tradeItemId+'&img='+vv.img+'&title='+vv.title+'&price='+vv.price">
    <!-- "sale""cfav" -->
        <div class="">
            <div class="item-img">
                <img :src="vv.img" alt="">
            </div>
            <div class="item-text">
                <p>{{vv.title}}</p>
            </div>
            <div class="item-yuan">
                <div><strong>{{vv.price}}</strong></div>
                <div>{{vv.sale}}<i class="iconfont icon-xingxing1"></i></div>
            </div>
        </div>
    </router-link>
</div>
<!-- 另一层商品分类  -->


</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name:'TypeRight',
  data(){
    return {}   
  },
  mounted(){},
  methods:{
      getPai( f ){
          this.$store.dispatch('getPai',f)
      }
  },  
  components:{},
  computed:{
      ...mapGetters([
          'types',
          'sort',
          'getpai'
      ])
  },
}
</script>
<style scoped lang="less">
.typeeeeeeee{
    overflow: auto;
    height: 9.7rem;
}
// 综合 销量 新品
.type-xuan-type{
    border: 0.001rem solid #eee;
    > div{
        display: inline-block;
        width: 32.2%; 
        >p{ 
            text-align: center;
            font-size: 0.25rem;
            border-left:0.001rem solid #eee; 
        } 
    }
}
.type-xuan{
    >.item{
         margin: 0.05rem;
         margin-bottom:0rem; 
         display: inline-block;
         width: 47.8999%;
         border-radius: 0.08rem;
         overflow: hidden;
        >div{
            .item-img{
                height: 2.9rem;
                img{
                    width: 100%;
                    height: 2.9rem;  
                }
            }
            .item-text{
                p{ 
                    margin: 0;
                    padding: 0.1rem;
                    white-space:nowrap;
                    text-overflow:ellipsis;
                    overflow: hidden;
                }
            }
            .item-yuan{
                display: flex;
                justify-content:space-between;
                padding: 0  0.1rem;
                div:first-child{
                    font-size: 0.25rem;
                    color: #FF5777;
                }
                div:last-child{
                    text-align: right;
                    color: #999;
                }
            }
        }
    }
}
// 容器
.typecontent{
    width: 91.9%;
    padding:0.3rem 0.2rem 0 0.2rem;
    overflow: hidden;
    // 每一个分类选项
    >.type-items{
        text-align: center;
        width: 1.4562666rem;
        height: 1.9rem;
        margin: 0.2rem 0;
        overflow: hidden;
        display: inline-block;
        >div{
            width: 1.3rem;
            height: 1.3rem;
            margin: 0 0.08rem;
            background-color: #EEEEEE;
        }
        >p{
            margin: 0;
            padding: 0;
        }
        img{
            width: 1.3rem;
            height: 1.3rem;
        }
    } 
}
</style>