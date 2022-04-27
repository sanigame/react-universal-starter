/* eslint-disable no-useless-catch */
import fs from 'fs'
import path from 'path'

import React from 'react'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { matchPath } from 'react-router'
import { matchRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom/server'

import configureStore from '../src/redux/configureStore'
import AppRoutes from '../src/routes/index'
import routes from '../src/routes/routes'

// preload data for matched route
const prefetchBranchData = (store, req) => {
  try {
    const branch = matchRoutes(routes, req.url)
    const promises = branch.map(({ route, match }) => {
      const { loadData } = route
      const { dispatch } = store

      if (match && match.isExact && loadData) {
        if (Array.isArray(loadData)) {
          return Promise.all(loadData.map((action) => dispatch(action(match, req))))
        } else {
          return dispatch(loadData(match, req))
        }
      }

      return Promise.resolve(null)
    })

    return Promise.all(promises)
  } catch (err) {
    throw err
  }
}

const render = () => {
  return (req, res, next) => {
    /**
     * Take routes collection and see if it's a valid app's route
     */
    var match = routes.find((route) =>
      matchPath(req.path, {
        path: route.path,
        exact: true,
      }),
    )

    const is404 = req._possible404

    if (match || is404) {
      /**
       * Point to the html file created by CRA's build tool and open it
       */
      const filePath = path.resolve(__dirname, '..', 'build', 'index.html')

      fs.readFile(filePath, 'utf8', async (err, htmlData) => {
        if (err) {
          console.error('err', err)
          return res.status(404).end() // WARNING: This 404 will be handled by Express server and won't be your React 404 component.
        }

        const location = req.url

        if (is404) {
          /**
           * Set the app's response to 404 OK (https://httpstatuses.com/404)
           */
          res.writeHead(404, { 'Content-Type': 'text/html' })
          console.log(`SSR of unrouted path ${req.path} (404 ahead)`)
        } else {
          /**
           * Set the app's response to 200 OK (https://httpstatuses.com/200)
           */
          res.writeHead(200, { 'Content-Type': 'text/html' })
          console.log(`SSR of ${req.path}`)
        }

        const store = configureStore({})
        await prefetchBranchData(store, req)

        /**
         * Convert JSX code to a HTML string that can be rendered server-side with
         * `renderToString` a method provided by ReactDOMServer
         *
         * This sets up the app so that calling ReactDOM.hydrate() will preserve the
         * rendered HTML and only attach event handlers.
         * (https://reactjs.org/docs/react-dom-server.html#rendertostring)
         */
        const jsx = (
          <Provider store={store}>
            <StaticRouter location={location} context={{}}>
              <AppRoutes />
            </StaticRouter>
          </Provider>
        )
        const reactDom = renderToString(jsx)

        /**
         * inject the rendered app and it state
         * into our html and send it
         */
        return res.end(
          htmlData
            .replace('<div id="root"></div>', `<div id="root">${reactDom}</div>`)
            .replace('__REDUX__', JSON.stringify(store.getState())),
        )
      })
    } else {
      req._possible404 = true
      return next()
    }
  }
}

export default render
