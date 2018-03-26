<template>
<div class="xuanfu">
    <div class="nav">
        <router-link tag="div" to="/">
           <p><i class="iconfont icon-fanhui"></i></p> 
        </router-link>
        <div class="in">
            
            <div>
                <div>   
                    <input  @focus="dianji()" :class=" flag?'col1':'c' " type="text"  :placeholder="moren.query" v-model="sou">
                </div>
            </div>
        </div>
        <div @click="shou()">
            搜索
        </div>
    </div>
    <!-- 历史搜索 -->
    <div class="data">
        <div>
            <div>
                <p><i class="iconfont icon-fangdajing"></i>历史搜索</p>
            </div>
            <div>
                <div>
                     <p><i class="iconfont icon-shanchu"></i></p> 
                </div>
              
            </div>
        </div>
        <div>
            <div v-for="(v,i) in sendsou" :key="i" v-if=" !(sendsou.length == 0)">{{v}}</div>
            <div v-if=" sendsou.length == 0 ">暂无搜索历史</div>
        </div>
    </div>
    <!-- 热门搜索 -->
    <div class="get">
        <div>
            <div>
                <p><i class="iconfont icon-xingxing1"></i>热门搜索</p>
            </div>
            <div>
                <div>
                     <p>
                         <!-- <i class="iconfont icon-shanchu"></i> -->
                    </p> 
                </div>
              
            </div>
        </div>
        <div>
            <!-- {{sousuo}} -->
            <div v-for="(v,i) in sousuo" :key="i" v-if="sousuo.length" :style="'color:'+v.color" >{{v.query}}</div>
            <div v-if="!sousuo.length" >暂无热搜</div>
        </div>
    </div>
</div>
   
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name:'Shou',
  data(){
    return {
        sou:null,
        sous:[],
        flag:false
    }   
  },
  mounted(){
      this.$store.dispatch('getSousuo');
  },
 
  computed:{
      ...mapGetters([
          'moren',
          'sousuo',
          'sendsou'
      ]),
  },
  methods:{
       dianji(){
            this.flag = !this.flag
        },
      shou(){
          this.sous.push(this.sou)
          this.sou=null
          this.$store.dispatch('sendsou',this.sous)
      }
  }
}
</script>
<style scoped lang="less">
// 全局属性
@color: #666;
@height:0.82rem;
.xuanfu{
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: white;
   z-index: 99999;
   color: @color;
   .col1{
       border: 0.01rem solid red;
   }
   .c{
       border: 0.01rem solid #ccc;
   }
   // nav
   >.nav{
        display: flex;
        justify-content:space-between;
        i{
            font-size: 0.5rem;
        }
        strong{
            font-size: 0.25rem;   
        }
        input{
            
            border-radius: 0.15rem;
            height: 0.45rem;
            width: 95%;
        }
       > div{
        padding: 0.1rem 0rem;
        font-size: 0.25rem; 
        text-align: center;
        height: 0.66rem;

            p{
                margin: 0; 
            }
        }
        >div:first-child{
            flex: 0 0 0.8rem;
            // text-align: center;
            line-height: 0.66rem;
        }
        >.in{
            >div{
                // border:0.009rem  solid @color;
                margin: 0.09rem 0;
                
                
                div{
                    margin: 0;
                    padding: 0;
                    height: 0.5rem;
                    line-height: 0.5rem;
                    text-align: left;
                    text-indent: 0.2rem;
                }   
            }
            flex: 1;  
        }
        >div:last-child{
            flex: 0 0 1rem;
           line-height: 0.66rem;
        }
   } 
    //历史搜索
    >.data{
        margin: 0 0 0.2rem 0;
        >div:first-child{
            display: flex;
            justify-content:space-between;
            border-top: 0.001rem solid #eee; 
            >div:first-child{
                margin-left:0.2rem; 
                flex: 0 0 1.8rem
            }
            >div:last-child{
                flex: 1;
                width: 100%;
                text-align: right;
                margin-right:0.3rem; 
                div{
                    float: right;
                    width: 0.5rem;
                    text-align: center
                }
            }
        }
        >div:last-child{
            margin: 0 0.4rem;
            div{
                border: 0.01rem solid #eee;
                display: inline-block;
                padding: 0.05rem 0.1rem;
                margin: 0.1rem;
            }
        }
    }
    // 热门搜索
    >.get{
        margin: 0 0 0.2rem 0;
        >div:first-child{
            display: flex;
            justify-content:space-between;
            border-top: 0.001rem solid #eee; 
        >div:first-child{
            margin-left:0.2rem; 
            flex: 0 0 1.8rem
        }
        >div:last-child{
            flex: 1;
            width: 100%;
            text-align: right;
            margin-right:0.3rem; 
            div{
                float: right;
                width: 0.5rem;
                text-align: center
            }
        }
        }
        >div:last-child{
            margin: 0 0.4rem;
            div{
                border: 0.01rem solid #eee;
                display: inline-block;
                padding: 0.05rem 0.1rem;
                margin: 0.1rem;
            }
        }
    }    
}
</style>


