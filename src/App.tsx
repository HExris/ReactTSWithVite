import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import 'antd/dist/antd.css'
import './App.css'

// Components
import Layout from '@/router'
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'

const App: React.FC = () => {
  return <Layout />
}

export default App
