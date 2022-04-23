import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducers from './reducers'

// const middlewares = [thunk]
// const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)))
// export default store

export default function configureStore(initialState = {}) {
  let middlewares = applyMiddleware(thunk)

  if (process.env.NODE_ENV !== 'production') middlewares = composeWithDevTools(middlewares)

  const store = createStore(reducers, initialState, middlewares)

  return store
}
