import React from 'react'

import { redditListAction } from '../features/redditList/redux'
import { RedditListPage } from '../pages'

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
    path: '/server/:redditId',
    exact: true,
    element: <RedditListPage />,
    loadData: [
      ({ params }) => {
        console.log('params', params)
        return redditListAction.fetchRedditIfNeeded()
      },
    ],
  },
]

export default routes
