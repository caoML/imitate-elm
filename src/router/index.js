import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddShop from '@/views/addData/AddShop.vue'
import AddGoods from '@/views/addData/AddGoods.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/adddata/addshop',
      component: AddShop
    },
    {
      path: '/adddata/addgoods',
      component: AddGoods
    }
  ]
})
