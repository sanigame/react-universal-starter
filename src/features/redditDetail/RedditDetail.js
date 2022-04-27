import React, { useEffect } from 'react'

import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { redditDetailAction } from './redux'

function RedditDetail({ name }) {
  const dispatch = useDispatch()
  const redditDetail = useSelector((state) => state.redditDetail)
  const redditContent = redditDetail[name] || { isFetching: true }
  console.log('name', name)
  console.log('redditContent', redditContent)

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
      {/* {redditContent.isFetching ? <p>loading</p> : null}
      {redditContent.value[0].data.title ? <p>{redditContent.value[0].data.title}</p> : null} */}
      {/* {redditContent.isFetching ? (
        <CircularProgress style={{ display: 'block', margin: 'auto' }} color="secondary" />
      ) : (
        <div>
          <MediaCard
            title={redditContent.value[0].data.title}
            detail={redditContent.value[0].data.subreddit}
            name={redditContent.value[0].data.name}
          />
          <CommentList
            name={redditContent.value[0].data.name}
            permalink={redditContent.value[0].data.permalink}
          />
        </div>
      )} */}
    </div>
  )
}

RedditDetail.propTypes = {
  name: PropTypes.string.isRequired,
}

export default RedditDetail
