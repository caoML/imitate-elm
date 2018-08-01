import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddShop from '/home/laohoo/Documents/MMMM/imitate-elm/src/components/AddShop'
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
    }
  ]
})
