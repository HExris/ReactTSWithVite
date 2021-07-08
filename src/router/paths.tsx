interface PagePath {
  [path: string]: string
}

const routesPath: PagePath = {
  Home: '/',
  ProductDetail: '/product/:id/:appKey?/:type?',
  OrderManagement: '/order',
  OrderDetail: '/order/:id',
  Cart: '/cart',
  NotFound: '/404',
  NoAllow: '/notAllow'
}

export default routesPath
