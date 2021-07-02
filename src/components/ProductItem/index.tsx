import React from 'react'

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

const createProductItem = (props: ProductItem): React.ElementType => {
  return <div className="product-item"></div>
}
