import { combineReducers } from 'redux'

import { reducers as redditDetail } from '../features/redditDetail/redux'
import { reducers as redditList } from '../features/redditList/redux'

const rootReducer = combineReducers({ redditList, redditDetail })

export default rootReducer
