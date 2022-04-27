import { combineReducers } from 'redux'

import { reducers as redditList } from '../features/redditList'

const rootReducer = combineReducers({ redditList })

export default rootReducer
