import { combineReducers } from 'redux'

import { reducers as reddit } from '../features/reddit'

import todos from './todos'

const rootReducer = combineReducers({ reddit, todos })

export default rootReducer
