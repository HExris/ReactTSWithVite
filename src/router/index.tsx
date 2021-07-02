import React from 'react'
import { BrowserRouter as DOMRouter } from 'react-router-dom'
import Routes from './routes'
import { renderRoutes } from 'react-router-config'

const RouterView = () => {
  return (
    <React.StrictMode>
      <DOMRouter>{renderRoutes(Routes)}</DOMRouter>
    </React.StrictMode>
  )
}

export default RouterView
