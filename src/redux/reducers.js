import { combineReducers } from 'redux'

import { reducers as reddit } from '../features/reddit'

const rootReducer = combineReducers({ reddit })

export default rootReducer
