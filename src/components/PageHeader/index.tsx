import React, { useRef } from 'react'
// Style
import style from '@/assets/css/layout.module.less'
// Config
import routes from '@/router/routes'
import type { RouteItem, RouterMeta } from '@/router/routes'
// Components
import { Badge, Breadcrumb } from 'antd'
import { useHistory } from 'react-router-dom'
import cartIcon from '@/assets/svg/shopping-cart.svg'

interface PageHeader {
  pathname: string
}

const PageHeader = ({ pathname }: PageHeader) => {
  const historyInstance = useHistory()
  const currentRoute = routes.find((v: RouteItem) => v.path === pathname)
  const breadcrumbs: string[] = currentRoute?.meta.breadcrumbs || []
  const meta: RouterMeta = currentRoute?.meta || { level: 1 }
  const back = () => historyInstance.goBack()
  const navTo = (path: string) => historyInstance.push(path)
  const HeaderBtns = () => {
    let button
    if (meta?.level <= 2) {
      const cartBtn = () => {
        return (
          <Badge count={1} size="small">
            <div className={style.headerItem} onClick={() => navTo('/shoppingCart')}>
              <img src={cartIcon} />
              <span>购物车</span>
            </div>
          </Badge>
        )
      }
      button = cartBtn()
      return button
    } else {
      return <span onClick={back}>返回</span>
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
