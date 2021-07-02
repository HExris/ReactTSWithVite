import React, { useState } from 'react'
import 'antd/dist/antd.css'
import './App.css'

// Components
import RouterView from '@/router'
import Layout from '@/views/Layout'
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'

const App: React.FC = () => {
  return (
    <Layout>
      <PageHeader />
      <RouterView />
      <PageFooter />
    </Layout>
  )
}

export default App
