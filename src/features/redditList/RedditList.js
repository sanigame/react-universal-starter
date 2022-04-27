import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { DetailItem } from '../../components'

import { redditListAction } from './redux'

const RedditList = () => {
  const name = 'all'
  const dispatch = useDispatch()
  const reddit = useSelector((state) => state.redditList)
  const redditList = reddit[name] || { isFetching: false }
  const { isFetching, value, error } = redditList

  useEffect(() => {
    dispatch(redditListAction.fetchRedditIfNeeded(name))
    return () => {}
  }, [dispatch, name])

  return (
    <div>
      {isFetching ? <p>loading</p> : null}
      {value && value.map((topic, i) => <DetailItem key={i} title={topic.data.title} />)}
      {error ? <p>{error.message}</p> : null}
    </div>
  )
}

export default RedditList
