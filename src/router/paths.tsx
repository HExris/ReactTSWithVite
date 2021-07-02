interface PagePath {
  [path: string]: string
}

const routesPath: PagePath = {
  Home: '/',
  ProductDetail: '/product/:id/:appKey?/:type?',
  OrderManagement: '/order',
  OrderDetail: '/order/:id',
  Cart: '/cart',
  NoAllow: '/notAllow'
}

export default routesPath
