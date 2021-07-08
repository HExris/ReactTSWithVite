import React, { useEffect, useState } from 'react'

import { Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'

// Style
import style from './list.module.less'

interface ProductItem {
  id: number
  name: string
  type: number
  intro: string
  icon: string
  advertiseDesc: string
  userCount: number
  priceType: number
  canTrial: boolean
  lowestMoney: number
  skuCount: number
}

const ProductList: React.FC = () => {
  // Sort Menu
  const Sort = () => (
    <Menu>
      <Menu.Item onClick={() => updateSort('按上架时间排序')}>
        <a>按上架时间排序</a>
      </Menu.Item>
      <Menu.Item onClick={() => updateSort('按用户数排序')}>
        <a>按用户数排序</a>
      </Menu.Item>
    </Menu>
  )
  const updateSort = (type: string) => {
    useEffect(() => {
      setSortType(type)
    }, [])
  }
  const [sortType, setSortType] = useState('按上架时间排序')
  //   useEffect(() => {

  //   }, [])
  return (
    <div className={style.productList}>
      <div className={style.header}>
        <div className={style.title}>商品总览</div>
        <Dropdown overlay={Sort}>
          <a>
            {sortType}
            <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </div>
  )
}

export default ProductList
