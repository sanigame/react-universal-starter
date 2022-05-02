import types from './types'
const initialState = {}

const redditDetail = (state = initialState, { type, payload, name }) => {
  switch (type) {
    case types.FETCH_REDDIT_DETAIL_REQUEST:
      return {
        ...state,
        [name]: {
          isFetching: true,
          error: false,
        },
      }
    case types.FETCH_REDDIT_DETAIL_SUCCESS:
      return {
        ...state,
        [name]: {
          isFetching: false,
          value: payload.data.children,
        },
      }
    case types.FETCH_REDDIT_DETAIL_FAILURE:
      return {
        ...state,
        [name]: {
          isFetching: false,
          error: payload,
        },
      }
    default:
      return state
  }
}
export default redditDetail
