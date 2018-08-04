import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import customer from '@/views/data/customer'
import bussiness from '@/views/data/bussiness'
import food from '@/views/data/food'
import order from '@/views/data/order'
import admin from '@/views/data/admin'
import shops from '@/views/add/shops'
import commodity from '@/views/add/commodity'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout
    },
    {
      path: '/data',
      name: '/data',
      children: [
        {
          path: 'customer',
          name: 'coutomer',
          component: customer,
          meta: {
            title: 'custom',
            icon: 'eyes'
          }
        },
        {
          path: 'business',
          name: 'business',
          component: bussiness,
          meta: {
            title: 'custom',
            icon: 'eyes'
          }
        },
        {
          path: 'food',
          name: 'food',
          component: food,
          meta: {
            title: 'custom',
            icon: 'eyes'
          }
        },
        {
          path: 'order',
          name: 'order',
          component: order,
          meta: {
            title: 'custom',
            icon: 'eyes'
          }
        },
        {
          path: 'admin',
          name: 'admin',
          component: admin,
          meta: {
            title: 'custom',
            icon: 'eyes'
          }
        }
      ],
      meta: {
        icon: 'eye',
        title: '用户数据'
      }
    },
    {
      path: 'add',
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
        title: '添加',
        icon: 'eye'
      }
    }
  ]
})

// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
