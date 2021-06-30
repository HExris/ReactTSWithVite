import React, { ReactDOM } from 'react'
import { BrowserRouter as DOMRouter, Redirect, Route } from 'react-router-dom'
import Routes from './routes'
import { renderRoutes } from 'react-router-config'

const RouterView = () => {
  return (
    <React.StrictMode>
      <DOMRouter>
        {renderRoutes(Routes)}
        {/* <Route render={() => <Redirect to="/404" />} /> */}
      </DOMRouter>
    </React.StrictMode>
  )
}

export default RouterView
