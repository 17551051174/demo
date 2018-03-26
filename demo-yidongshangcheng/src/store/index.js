import Vue from 'vue'
import Vuex from 'vuex'
Vue.use( Vuex );

import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'
import Homeban from './modules/Homeban'
import TypeCom from './modules/TypeCom'
import Sousuo from './modules/Sousuo.js';
import Xiangqing from './modules/Xiangqing.js';
import Shop from './modules/Shop.js';


export default new Vuex.Store({
	actions,
	getters,
	mutations,
	modules:{
		Homeban,
		TypeCom,
		Sousuo,
		Xiangqing,
		Shop
	}
})
