import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import manage from '@/views/data/manage'
import customer from '@/views/data/customer'
import bussiness from '@/views/data/bussiness'
import food from '@/views/data/food'
import order from '@/views/data/order'
import admin from '@/views/data/admin'
import shops from '@/views/add/shops'
import commodity from '@/views/add/commodity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: manage
    },
    {
      path: '/data/bussiness',
      name: 'bussiness',
      component: bussiness,
      meta: ['用户数据', '商家列表']
    },
    {
      path: '/data/customer',
      name: 'layout',
      component: customer,
      meta: ['用户数据', '用户列表']
    },
    {
      path: '/data/food',
      component: food,
      meta: ['用户数据', '食品列表']
    },
    {
      path: '/data/order',
      component: order,
      meta: ['用户数据', '订单列表']
    },
    {
      path: '/data/admin',
      component: admin,
      meta: ['用户数据', 'admin列表']
    },
    {
      path: '/data',
      name: 'data',
      component: manage,
      children: [
        {
          path: '',
          name: 'home',
          component: home
        },
        {
          path: 'customer',
          // name: 'customer',
          component: customer,
          meta: {
            title: '用户列表',
            icon: 'eye'
          }
        },
        {
          path: 'bussiness',
          name: 'bussiness',
          component: bussiness,
          meta: {
            title: '商家列表',
            icon: 'eyes'
          }
        },
        {
          path: 'food',
          name: 'food',
          component: food,
          meta: {
            title: '食品列表',
            icon: 'eyes'
          }
        },
        {
          path: 'order',
          name: 'order',
          component: order,
          meta: {
            title: '订单列表',
            icon: 'eyes'
          }
        },
        {
          path: 'admin',
          name: 'admin',
          component: admin,
          meta: {
            title: '管理员列表',
            icon: 'eyes'
          }
        }
      ],
      meta: {
        icon: 'document',
        title: '用户数据'
      }
    },
    {
      path: '/add',
      name: 'add',
      children: [
        {
          path: 'shops',
          name: 'shops',
          component: shops,
          meta: {
            title: 'custom',
            icon: 'eyes'
          }
        },
        {
          path: 'commodity',
          name: 'commodity',
          component: commodity,
          meta: {
            title: 'custom',
            icon: 'eyes'
          }
        }
      ],
      meta: {
        title: '添加数据',
        icon: 'plus'
      }
    }
  ]
})
