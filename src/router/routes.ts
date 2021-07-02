import loadable from '@loadable/component'
import { RouteConfig } from 'react-router-config'
import { Redirect } from 'react-router-dom'
import React from 'react'

interface routerMeta {
  level: Number
  breadcrumbs?: string[]
  headerBtns?: string[]
  keepAlive?: true
}

interface routeItem extends RouteConfig {
  path: string
  name: string
  meta: routerMeta
}

const routes: routeItem[] = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    meta: {
      level: 1,
      breadcrumbs: ['商品列表'],
      headerBtns: ['cart', 'order'],
      keepAlive: true
    },
    component: loadable(() => import('@/views/Home'))
  },
  {
    path: '/404',
    name: 'NotFound',
    exact: true,
    meta: {
      level: 1
    },
    component: loadable(() => import('@/views/NotFound'))
  },
  {
    path: '*',
    name: 'RediretNoFound',
    exact: true,
    meta: {
      level: 1
    },
    component: loadable(() => import('@/views/Rediret'))
  }
  // {
  //   path: '/product/:id/:appKey?/:type?',
  //   name: 'ProductDetail',
  //   meta: {
  //     level: 2,
  //     name: ['商品详情'],
  //     headerBtns: ['cart', 'order']
  //   },
  //   component: () => import(/* webpackChunkName: "ProductDetail" */ '@/views/Product/ProductDetail')
  // },
  // {
  //   path: '/orderManagement',
  //   name: 'OrderManagement',
  //   meta: {
  //     level: 2,
  //     name: ['订单管理'],
  //     headerBtns: ['cart']
  //   },
  //   component: () => import(/* webpackChunkName: "OrderManagement" */ '@/views/OrderManagement')
  // },
  // {
  //   path: '/orderDetail/:id',
  //   name: 'OrderDetail',
  //   meta: {
  //     level: 3,
  //     name: [{
  //       routerName: 'OrderManagement',
  //       name: '订单管理'
  //     }, {
  //       name: '订单详情'
  //     }],
  //     headerBtns: []
  //   },
  //   component: () => import(/* webpackChunkName: "OrderDetail" */ '@/views/OrderManagement/OrderDetail')
  // },
  // {
  //   path: '/shoppingCart',
  //   name: 'ShoppingCart',
  //   meta: {
  //     level: 2,
  //     name: ['购物车'],
  //     headerBtns: ['order']
  //   },
  //   component: () => import(/* webpackChunkName: "ShoppingCart" */ '@/views/ShoppingCart')
  // },
  // {
  //   path: '/noRight',
  //   name: 'NoRight',
  //   component: () => import(/* webpackChunkName: "NoRight" */ '@/views/Error/NoRight')
  // },
  // {
  //   path: '/purchaseNotes',
  //   name: 'PurchaseNotes',
  //   component: () => import(/* webpackChunkName: "PurchaseNotesPage" */ '@/components/PurchaseNotesPage')
  // },
  // {
  //   path: '*',
  //   redirect: '/'
  // }
]

export default routes
export { routes }

export type { routeItem }
