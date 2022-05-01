import React, { lazy } from 'react'

import { redditDetailAction } from '../features/redditDetail/redux'
import { redditListAction } from '../features/redditList/redux'

const RedditListPage = lazy(() => import('../pages/RedditListPage'))
const RedditDetailPage = lazy(() => import('../pages/RedditDetailPage'))

const routes = [
  {
    path: '/',
    exact: true,
    element: <RedditListPage />,
  },
  {
    path: '/server',
    exact: true,
    element: <RedditListPage />,
    loadData: [() => redditListAction.fetchRedditIfNeeded()],
  },
  {
    path: '/detail/:name',
    exact: true,
    element: <RedditDetailPage />,
    loadData: [
      ({ params }) => {
        return redditDetailAction.fetchRedditDetailIfNeeded(params.name)
      },
    ],
  },
]

export default routes
