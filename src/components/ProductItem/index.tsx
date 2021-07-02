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

const CreateProductItem: React.FC = () => {
  return <div className="product-item"></div>
}

export default CreateProductItem
export type { ProductItem }
