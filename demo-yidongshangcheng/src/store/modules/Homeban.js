import Vue from "vue";

// mapState
const state = {
    // 轮播图
    bannerlist:[],
    // 品牌
    Yilist:[],
    // 促销直达
    ChuXiaolist:[],
    // 热门市场
    Shilist:[],
    // 猜你喜欢
    Xilist:[]
}

// mapGetters
const getters = {
    banner( state ){
        return state.bannerlist;
    },
    yilist( state ){
        return state.Yilist;
    },
    chuxiaolist( state ){
        return state.ChuXiaolist
    },
    shilist( state ){
        return state.Shilist
    },
    xilist( state ){
        return state.Xilist
    }
}

const actions = {
    getBanner({commit}){
        Vue.http.jsonp('https://mce.mogucdn.com/jsonp/multiget/3',{
            params:{
                pids:'51822,106930,51833,51836',
            }
        }).then(( { body:{ data } } )=>{
            commit('getBanner',data[51822]);
            commit('getYi',data[106930]);
            commit('getChuXiao',data[51833]);
            commit('getShi',data[51836]);
        });
    },
    getLove({ commit }){
        Vue.http.jsonp('https://list.mogujie.com/search',{
            params:{
                pid:'9750',
                sort:'pop'
            }
        }).then(( {body:{ result } } )=>{
            // console.log(result)
            commit('getLove',result);
        });
    }
}

const mutations = {
    getBanner(state,data){
    state.bannerlist = data.list    
    },
    getChuXiao(state,data){
        state.ChuXiaolist = data.list
    },
    getYi(state,data){
        state.Yilist = data.list
    },
    getShi(state,data){
        state.Shilist = data.list
    },
    getLove(state,data){
        state.Xilist = data.wall.list
    }
}

export default {
	state,
	getters,
	actions,
	mutations,
}