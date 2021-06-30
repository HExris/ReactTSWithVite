import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'antd/dist/antd.css'
import './App.css'

// Ant Design
import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout
// Components
import RouterView from '@/router'

const App: React.FC = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <RouterView />
      </Content>
      <Footer></Footer>
    </Layout>
  )
}

export default App
