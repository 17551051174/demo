import Vue from 'vue'
import Router from 'vue-router'
import  HomeComponent  from "../components/content/HomeComponent.vue"
import  TypeComponent  from "../components/content/TypeComponent.vue"
import  ShopComponent  from "../components/content/ShopComponent.vue"
import  MeComponent  from "../components/content/MeComponent.vue"

import Shou from "../components/content/header/Shou.vue"

import XiangQingComponent from '../components/content/XiangQingComponent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent,
      mate: { keepAlive: true }
    },{
      path: '/type',
      name: 'type',
      component:TypeComponent,
      mate: { keepAlive: true } 
    },{
      path: '/me',
      name: 'me',
      component:MeComponent,

    },
    {
      path: '/shop',
      name: 'shop',
      component:ShopComponent,

    },
    {
      path: '/shou',
      name: 'shou',
      component:Shou,
    },
    {
      path: '/xiang',
      name: 'XiangQing',
      component:XiangQingComponent,
    }
  ]
})
