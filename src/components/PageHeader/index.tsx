import React, { useRef } from 'react'
// Style
import style from '@/assets/layout.module.less'
// Config
import routes from '@/router/routes'
import type { RouteItem, RouterMeta } from '@/router/routes'
// Components
import { Breadcrumb } from 'antd'
interface PageHeader {
  pathname: string
}

const PageHeader = ({ pathname }: PageHeader) => {
  const currentRoute = routes.find((v: RouteItem) => v.path === pathname)
  const breadcrumbs: string[] = currentRoute?.meta.breadcrumbs || []
  const meta: RouterMeta = currentRoute?.meta || {}
  const headerBtns = () => {
    let button
    if (meta?.level) {
      button = (
      <div
        class="transition-btn"
      >
      <template v-if="buttonVisible('cart')">
        <el-badge
          class="item"
          :value="shoppingCount"
          :hidden="!shoppingCount"
          key="cart"
        >
          <div
            class="header-item"
            @click="$router.push('/shoppingCart')"
          >
            <img src="@/assets/svg/shopping-cart.svg" />
            <span>购物车</span>
          </div>
        </el-badge>
      </template>
      <template v-if="buttonVisible('order')">
        <div
          class="header-item"
          @click="$router.push('/orderManagement')"
          key="order"
        >
          <img src="@/assets/svg/order-manage.svg" />
          <span>订单管理</span>
        </div>
      </template>
      <template v-if="meta.level > 1">
        <div
          class="header-item"
          @click="navHome"
          key="back"
        >
          <img src="@/assets/svg/back.svg" />
          <span>返回首页</span>
        </div>
      </template>
    </div>)
      return button
    } else {
      return <></>
    }
  }
  return (
    <div className={style.header}>
      <div className={style.headerInner}>
        <Breadcrumb>
          {breadcrumbs.map((breadcrumb, index) => (
            <Breadcrumb.Item key={index} className={style.headerName}>
              {breadcrumb}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
        {headerBtns}
      </div>
    </div>
  )
}

export default PageHeader
