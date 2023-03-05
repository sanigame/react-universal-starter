import { matchPath } from 'react-router'
import { Routes } from 'react-router-dom'

// ensure we're using the exact code for default root match
const { computeMatch } = Routes.prototype

const matchRoutes = (routes, pathname, /*not public API*/ branch = []) => {
  routes.some((route) => {
    const match = route.path
      ? matchPath(route, pathname)
      : branch.length
      ? branch[branch.length - 1].match // use parent match
      : computeMatch(pathname) // use default "root" match

    if (match) {
      branch.push({ route, match })

      if (route.routes) {
        matchRoutes(route.routes, pathname, branch)
      }
    }

    return match
  })

  return branch
}

export default matchRoutes
