import React from 'react'
// React Router
import { BrowserRouter as DOMRouter, useLocation } from 'react-router-dom'

// Router View
import View from '@/router/view'

const RouterView = () => {
  // function usePageViews() {
  //   let location = useLocation()
  //   React.useEffect(() => {

  //   }, [location])
  // }

  return (
    <React.StrictMode>
      <DOMRouter>
        <View />
      </DOMRouter>
    </React.StrictMode>
  )
}

export default RouterView
