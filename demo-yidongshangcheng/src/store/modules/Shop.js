import Vue from "vue";

// mapState
const state = {
    //物品
    shops:[],
    // 总金额
    qian:0,
    flag:false
}

// mapGetters
const getters = {
    shopsinfo(){
        return state.shops
    },
    qian(){
        return state.qian;
    }
    
}

const actions = {
    getshopinfo({ commit,state },n){
        // console.log(1)
        state.shops.push(n);
    },
    jia({ commit,state },n){
        state.shops[n].ge = state.shops[n].ge*1 +1;
        state.shops[n].qian = (state.shops[n].price*1)*state.shops[n].ge
    },
    jian({ commit,state },n){
      if(state.shops[n].ge<=1){
        return;
      }
    state.shops[n].ge = state.shops[n].ge*1 -1;
    state.shops[n].qian = (state.shops[n].price*1)*state.shops[n].ge
    },
    shanchu({commit,state},n){
        console.log(n)
        state.shops.splice(n,1);
    },
    changes({commit,state}){
        state.qian = 0;
        state.shops.forEach((v,i) => {
            // console.log(v.flag)
            if(v.flag ==true){
                state.qian = v.qian*1 + state.qian*1
            }
        });
    }, 
    changesjian({commit,state},n){

        if(state.shops[n].ge<=1){
            return
        }
        state.qian =  state.qian*1 -(state.shops[n].price*1 )
        // state.shops.forEach((v,i) => {
        //     if(v.ge<=1){
        //         return
        //     }
        //     state.qian =  state.qian*1 -(v.price*1 )
           
        // });
    },
    changesjia({commit,state},n){
        // console.log(n)
        // console.log(state.shops[n])
        // state.shops.forEach((v,i) => {
        //     state.qian =  state.qian*1 +(v.price*1 )
        // });
            state.qian =  state.qian*1 +(state.shops[n].price*1)
        
    }
}

const mutations = {
    sousuo(state,data){
        state.shops = data
    }
}

export default {
	state,
	getters,
	actions,
	mutations,
}