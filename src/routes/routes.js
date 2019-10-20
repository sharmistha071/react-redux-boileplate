import React from 'react'

const routes = [
  {
    path: '/',
    exact: true,
    component: React.lazy(() => import('../pages/Home'))
  },
  {
    path: '/about',
    exact: true,
    component: React.lazy(() => import('../pages/About'))
  }
]

export default routes