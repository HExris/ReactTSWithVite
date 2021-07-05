import React from 'react'
import { renderRoutes } from 'react-router-config' // 大坑勿用
// Router config
import Routes from './routes'
// Components
import { Route, Switch } from 'react-router-dom'
import type { RouteProps } from 'react-router-dom'
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'
import RouteWrapper from './wrapper'
import Redirect from '@/views/Redirect'

interface LocationProps extends RouteProps {
  pathname: string
}

const Layout = ({ pathname }: LocationProps) => {
  return (
    <>
      <PageHeader pathname={pathname} />
      <Switch>
        {Routes.map((route) => (
          <Route
            path={route.path}
            key={route.name}
            exact={route.exact}
            render={(locationProps: any) => (
              <RouteWrapper {...{ location: locationProps, Comp: route.component }} />
            )}
          />
        ))}
        <Route component={Redirect} />
      </Switch>
      <PageFooter />
    </>
  )
}

export default Layout
