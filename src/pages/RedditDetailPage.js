import React from 'react'

import { useParams } from 'react-router-dom'

import { RedditDetail } from '../features/redditDetail'

import PageContainer from './PageContainer'

const RedditDetailPage = () => {
  const { name } = useParams()
  return (
    <PageContainer title={`${name} detail`}>
      <RedditDetail name={name} />
    </PageContainer>
  )
}

export default RedditDetailPage
