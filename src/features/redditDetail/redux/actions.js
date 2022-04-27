import axios from 'axios'

import types from './types'

const fetchRedditDetailFailure = (error, name) => ({
  type: types.FETCH_REDDIT_DETAIL_FAILURE,
  payload: error.message,
  name,
})

const fetchRedditDetailSuccess = (payload, name) => ({
  type: types.FETCH_REDDIT_DETAIL_SUCCESS,
  payload,
  name,
})

const fetchRedditDetail = (name) => async (dispatch) => {
  dispatch({ type: types.FETCH_REDDIT_DETAIL_REQUEST, name })

  try {
    const res = await axios.get(`https://www.reddit.com/by_id/${name}.json`)
    dispatch(fetchRedditDetailSuccess(res.data, name))
  } catch (error) {
    dispatch(fetchRedditDetailFailure(error))
  }
}

const shouldFetchRedditDetail = (state, name) => {
  const content = state.redditDetail[name]
  if (!content || content.error) {
    return true
  }

  return false
}

export const fetchRedditDetailIfNeeded = (name) => (dispatch, getState) => {
  if (shouldFetchRedditDetail(getState(), name)) {
    return dispatch(fetchRedditDetail(name))
  }

  return null
}

export default {
  fetchRedditDetailIfNeeded,
}
