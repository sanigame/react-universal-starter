import React from 'react'

import { RedditList } from '../features/redditList'

import PageContainer from './PageContainer'

const RedditListPage = () => {
  return (
    <PageContainer title="Reddit list" description="List of reddit">
      <RedditList />
    </PageContainer>
  )
}

export default RedditListPage
