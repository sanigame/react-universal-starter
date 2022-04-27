import { combineReducers } from 'redux'

import { reducers as redditDetail } from '../features/redditDetail'
import { reducers as redditList } from '../features/redditList'

const rootReducer = combineReducers({ redditList, redditDetail })

export default rootReducer
