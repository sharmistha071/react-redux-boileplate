import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { NotFound } from '../components'

export const RouteWithSubRoutes = route => {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component
          {...props}
          routes={route.routes}
          subRoutes={route.routes}
        />
      )}
    />
  )
}

const routeConfig = (routes, props) => {
  if (!routes) return <div />
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...props} {...route} />
      ))}
      <Route component={NotFound} />
    </Switch>
  )
}

export default routeConfig
