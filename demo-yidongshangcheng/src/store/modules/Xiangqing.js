import Vue from "vue";

// mapState
const state = {
    // 分类
    pinglun:[],
    // 分类sss
}

// mapGetters
const getters = {
    pinglun(){
        return state.pinglun
    }
}

const actions = {
    // 左边列表
    getpinglun({ commit , state},n){
        Vue.http.jsonp('https://rate.mogujie.com/h5/rate/jsonp/x6.rate.ratelist/v1',{
            params:{
                itemId:n
            }
        }).then(({body:{data:{list}}} )=>{
            // console.log(list)
            commit('getpinglun',list)
        })
    }
   
}

const mutations = {
    getpinglun(state,data){
       state.pinglun = data
    }
    
}

export default {
	state,
	getters,
	actions,
	mutations,
}