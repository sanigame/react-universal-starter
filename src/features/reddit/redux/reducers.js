import types from './types'
const initialState = {}

const reddit = (state = initialState, { type, payload, name }) => {
  switch (type) {
    case types.FETCH_REDDIT_REQUEST:
      return {
        ...state,
        [name]: {
          isFetching: true,
          error: null,
        },
      }
    case types.FETCH_REDDIT_SUCCESS:
      return {
        ...state,
        [name]: {
          isFetching: false,
          // value: state.value.concat(payload.data.children),
          value: payload.data.children,
        },
      }
    case types.FETCH_REDDIT_FAILURE:
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

export default reddit
