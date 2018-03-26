import Vue from "vue";

// mapState
const state = {
    // 搜索
    sousuo:[],
    // 默认搜索
    moren:[],
    // 记录
    sendsou:[]
}

// mapGetters
const getters = {
    sousuo(){
        return state.sousuo
    },
    moren(){
        return state.moren
    },
    sendsou(){
        return state.sendsou
    }
}

const actions = {
    getSousuo({ commit}){
        console.log(111)
        Vue.http.jsonp('https://list.mogujie.com/module/mget',{
            params:{
                code: "sketch,hotWord",
                platform: "H5"
            }
        }).then(({body:{data:{hotWord:{data},sketch}}})=>{
        //    console.log(data,sketch)
            commit('sousuo',data)
            commit('moren',sketch.data)
        })
    },
    sendsou({commit},n){
        
        if(n){
            // console.log(11)
            commit('sendsou',n)
        }
        return;
    }
}

const mutations = {
    sousuo(state,data){
        state.sousuo = data
    },
    moren(state,data){
        state.moren = data
    },
    sendsou(state,data){
        state.sendsou = data
    }
}

export default {
	state,
	getters,
	actions,
	mutations,
}