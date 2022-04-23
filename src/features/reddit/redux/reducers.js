import types from './types'
const initialState = {
  isFetching: false,
  value: [],
  error: null,
}

const reddit = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_REDDIT_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    case types.FETCH_REDDIT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        value: payload.data.children,
      }
    case types.FETCH_REDDIT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload,
      }
    default:
      return state
  }
}

export default reddit
