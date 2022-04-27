import axios from 'axios'

import types from './types'

const fetchRedditFailure = (error, name) => ({
  type: types.FETCH_REDDIT_FAILURE,
  payload: error.message,
  name,
})

const fetchRedditSuccess = (payload, name) => ({
  type: types.FETCH_REDDIT_SUCCESS,
  payload,
  name,
})

const fetchReddit =
  (name = 'all') =>
  async (dispatch) => {
    dispatch({ type: types.FETCH_REDDIT_REQUEST, name })

    try {
      const res = await axios.get(`https://www.reddit.com/r/${name}/hot.json`)
      dispatch(fetchRedditSuccess(res.data, name))
    } catch (error) {
      dispatch(fetchRedditFailure(error))
    }
  }

const shouldFetchReddit = (state, name) => {
  const reddit = state.redditList[name]
  if (!reddit || reddit.error) {
    return true
  }

  return false
}

const fetchRedditIfNeeded = (name) => (dispatch, getState) => {
  if (shouldFetchReddit(getState(), name)) {
    return dispatch(fetchReddit(name))
  }

  return null
}

export default {
  fetchRedditIfNeeded,
}
