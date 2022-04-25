import { redditListAction } from '../features/reddit/redux'
import { Home } from '../pages'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/server',
    exact: true,
    component: Home,
    loadData: [() => redditListAction.fetchRedditIfNeeded()],
  },
  {
    path: '/server/:redditId',
    exact: true,
    component: Home,
    loadData: [
      ({ params }) => {
        console.log('params', params)
        return redditListAction.fetchRedditIfNeeded()
      },
    ],
  },
]

export default routes
