import loadable from '@loadable/component'
import Paths from './paths'
import { RouteConfig } from 'react-router-config'

interface RouterMeta {
  level: Number
  breadcrumbs?: string[]
  headerBtns?: string[]
  keepAlive?: true
}

interface RouteItem extends RouteConfig {
  path: string
  name: string
  meta: RouterMeta
}

const routes: RouteItem[] = [
  {
    path: Paths.Home,
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
    path: Paths.NotFound,
    name: 'NotFound',
    exact: true,
    meta: {
      level: 1
    },
    component: loadable(() => import('@/views/NotFound'))
  },
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
  {
    path: Paths.OrderManagement,
    name: 'OrderManagement',
    meta: {
      level: 2,
      breadcrumbs: ['订单管理'],
      headerBtns: ['cart']
    },
    component: loadable(() => import('@/views/Order/list'))
  },
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
  {
    path: Paths.Cart,
    name: 'Cart',
    meta: {
      level: 2,
      breadcrumbs: ['购物车'],
      headerBtns: ['order']
    },
    component: loadable(() => import('@/views/Cart'))
  }
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

export type { RouteItem, RouterMeta }
