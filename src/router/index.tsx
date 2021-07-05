import React from 'react'
// React Router
import { BrowserRouter as DOMRouter } from 'react-router-dom'

// Router View
import View from '@/router/view'

const RouterView = () => {
  return (
    <React.StrictMode>
      <DOMRouter>
        <View pathname={location.pathname} />
      </DOMRouter>
    </React.StrictMode>
  )
}

export default RouterView
