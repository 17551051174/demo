import Vue from "vue";

// mapState
const state = {
    // 分类
    types:[],
    // 分类sss
    typesss:[],
    // 排序
    sort:[],
    // 排序展示 －－－综合  销量  新品 
    getpai:[],
    // key
    maitKey:''
}

// mapGetters
const getters = {
    type(){
        return state.types
    },
    types(){
        return state.typesss
    },
    sort(){
        return state.sort
    },
    getpai(){
        return state.getpai
    }
}

const actions = {
    // 左边列表
    getType({ commit , state}){
        Vue.http.jsonp('https://mce.mogucdn.com/jsonp/multiget/3',{
            params:{
                pids:41789
            }
        }).then(({ body:{ data } })=>{
            // console.log(data)
            commit('getType',data[41789])
        })
    },
    // 右侧详情
    getTypes({ commit,state },{n,s}){
        Vue.http.jsonp('https://mce.mogujie.com/jsonp/makeup/3',{
            params:{
                pid:n
            }
        }).then(( { body:{ data,data:{ categoryNavigation:{list} } } } )=>{
            state.maitKey = s;
            commit('getTypes',list);
           
        })
        let a = state.maitKey
        Vue.http.jsonp('https://list.mogujie.com/search',{
            params:{
                cKey:"h5-cube",
                fcid: s,
                sort:'pop'
            }
        }).then(({ body:{ result }})=>{
           
            commit('getSort',result.sortFilter);
            commit('getpai',result.wall.docs);
        })
    }, 
    // 点击变列表
    getPai({ commit,state },f){
        Vue.http.jsonp('https://list.mogujie.com/search',{
            params:{
                cKey:"h5-cube",
                fcid: state.maitKey,
                sort:f
            }
        }).then(({ body:{ result } })=>{
            
            commit('getpai',result.wall.docs)
        })
    }
}

const mutations = {
    getType(state,data){
        state.types = data.list;
        // console.log(state.types)
    },
    getTypes(state,data,n){
        state.typesss = data;
        // console.log(state.maitKey)
    },
    getSort(state,data){
        state.sort = data
        // console.log( state.sort)
    },
    getpai(state,data){
        state.getpai = data 
        // console.log(state.getpai)        
    }
}

export default {
	state,
	getters,
	actions,
	mutations,
}