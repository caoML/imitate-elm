import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
// import manage from '@/views/data/manage'
import customer from '@/views/data/customer'
import bussiness from '@/views/data/bussiness'
import food from '@/views/data/food'
import order from '@/views/data/order'
import admin from '@/views/data/admin'
import shops from '@/views/add/shops'
import commodity from '@/views/add/commodity'
import login from '@/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/data',
      component: home,
      children: [
        {
          path: 'customer',
          component: customer,
          meta: {
            title: '用户列表',
            bread: ['用户数据', '用户列表']
          }
        },
        {
          path: 'bussiness',
          component: bussiness,
          meta: {
            title: '商家列表',
            bread: ['用户数据', '商家列表']
          }
        },
        {
          path: 'food',
          component: food,
          meta: {
            title: '食品列表',
            bread: ['用户数据', '食品列表']
          }
        },
        {
          path: 'order',
          component: order,
          meta: {
            title: '订单列表',
            bread: ['用户数据', '订单列表']
          }
        },
        {
          path: 'admin',
          component: admin,
          meta: {
            title: '管理员列表',
            bread: ['用户数据', '管理员列表']
          }
        }
      ],
      meta: {
        title: '用户数据',
        icon: 'document'
      }
    },
    {
      path: '/add',
      component: home,
      children: [
        {
          path: 'shops',
          component: shops,
          meta: {
            title: 'custom',
            icon: 'eyes'
          }
        },
        {
          path: 'commodity',
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
