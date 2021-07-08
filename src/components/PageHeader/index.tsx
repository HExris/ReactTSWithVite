import React, { ReactPropTypes, useRef, useState } from 'react'
// Style
import style from '@/assets/css/layout.module.less'
// Config
import routes from '@/router/routes'
import type { RouteItem, RouterMeta } from '@/router/routes'
// Components
import { Badge, Breadcrumb } from 'antd'
import { Link, useHistory, useLocation } from 'react-router-dom'
import cartIcon from '@/assets/svg/shopping-cart.svg'
import orderIcon from '@/assets/svg/order-manage.svg'
import backIcon from '@/assets/svg/back.svg'

// interface PageHeader {
//   pathname: string
// }

const PageHeader = () => {
  const historyInstance = useHistory()
  const location = useLocation()
  const currentRoute = routes.find((v: RouteItem) => v.path === location.pathname)
  const breadcrumbs: string[] = currentRoute?.meta.breadcrumbs || []
  const headerBtns: string[] = currentRoute?.meta.headerBtns || []
  const meta: RouterMeta = currentRoute?.meta || { level: 1 }
  const navTo = (path: string) => historyInstance.push(path)
  const goBack = () => historyInstance.goBack()
  // HeaderBtn
  const HeaderBtns = () => {
    let button
    if (meta?.level <= 2) {
      const CartBtn = () => {
        return (
          <Link to="/cart">
            <div className={style.headerItem} onClick={() => navTo('/shoppingCart')}>
              <img src={cartIcon} />
              <Badge count={1} size="small">
                <span style={{ lineHeight: '22px', display: 'block', color: '#333333' }}>
                  购物车
                </span>
              </Badge>
            </div>
          </Link>
        )
      }
      const OrderBtn = () => {
        return (
          <Link to="/order" className={style.headerItem}>
            <img src={orderIcon} />
            <span>订单管理</span>
          </Link>
        )
      }
      const BackBtn = () => {
        if (location.pathname !== '/') {
          return (
            <Link to="/" className={style.headerItem} onClick={() => navTo('/')}>
              <img src={backIcon} />
              <span>返回首页</span>
            </Link>
          )
        } else {
          return <></>
        }
      }
      button = (
        <div className={style.transitionBtn}>
          {headerBtns.includes('cart') && <CartBtn />}
          {headerBtns.includes('order') && <OrderBtn />}
          <BackBtn />
        </div>
      )
      return button
    } else {
      return <span onClick={() => goBack}>返回</span>
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
        {<HeaderBtns />}
      </div>
    </div>
  )
}

export default PageHeader
