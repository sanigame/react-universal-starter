import React, { useEffect } from 'react'

import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { redditDetailAction } from './redux'

function RedditDetail({ name }) {
  const dispatch = useDispatch()
  const redditDetail = useSelector((state) => state.redditDetail)
  const redditContent = redditDetail[name] || { isFetching: true }

  useEffect(() => {
    dispatch(redditDetailAction.fetchRedditDetailIfNeeded(name))
    return () => {}
  }, [dispatch, name])

  return (
    <div>
      {redditContent.isFetching ? (
        <p>loading...</p>
      ) : (
        <div>
          <p>title: {redditContent.value[0].data.title}</p>
          <p>subreddit: {redditContent.value[0].data.subreddit}</p>
          <p>name: {redditContent.value[0].data.name}</p>
        </div>
      )}
    </div>
  )
}

RedditDetail.propTypes = {
  name: PropTypes.string.isRequired,
}

export default RedditDetail
