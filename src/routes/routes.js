import React from 'react'

import { redditListAction } from '../features/reddit/redux'
import { Home } from '../pages'

const routes = [
  {
    path: '/',
    exact: true,
    element: <Home />,
  },
  {
    path: '/server',
    exact: true,
    element: <Home />,
    loadData: [() => redditListAction.fetchRedditIfNeeded()],
  },
  {
    path: '/server/:redditId',
    exact: true,
    element: <Home />,
    loadData: [
      ({ params }) => {
        console.log('params', params)
        return redditListAction.fetchRedditIfNeeded()
      },
    ],
  },
]

export default routes
