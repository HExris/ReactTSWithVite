import React, { useState } from 'react'

// Components
import Banner from '@/components/Banner'
import ProductList from '@/components/ProductList/list'

interface IHomeState {
  date: string
}

const Home: React.FC = () => {
  const [state, setDate] = useState<IHomeState>({
    date: ''
  })

  return (
    <div className="home">
      <Banner />
      <ProductList />
    </div>
  )
}

export default Home
