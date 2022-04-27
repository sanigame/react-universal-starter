import React from 'react'

import { redditDetailAction } from '../features/redditDetail'
import { redditListAction } from '../features/redditList/redux'
import { RedditListPage, RedditDetailPage } from '../pages'

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
