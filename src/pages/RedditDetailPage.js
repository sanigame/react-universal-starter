import React from 'react'

import { useParams } from 'react-router-dom'

import { RedditDetail } from '../features/redditDetail'

const RedditDetailPage = () => {
  const { name } = useParams()
  return <RedditDetail name={name} />
}

export default RedditDetailPage
