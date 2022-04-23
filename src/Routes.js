import React from 'react'

import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

// import { redditListAction } from './features/reddit/redux'
import { addTodo } from './actions'
import { Home } from './pages'

const AppRoutes = ({ store }) => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route
        path="/server"
        render={() => {
          if (store) {
            // store.dispatch(redditListAction.fetchRedditIfNeeded('all'))
            store.dispatch(addTodo('This should come renderer from server'))
            console.log('store', store)
          }
          return <Home />
        }}
        exact
      />
    </Switch>
  )
}

AppRoutes.propTypes = {
  store: PropTypes.any,
}

export default AppRoutes
