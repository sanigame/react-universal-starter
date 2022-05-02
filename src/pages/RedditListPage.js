import React from 'react'

import Button from '@mui/material/Button'

import { RedditList } from '../features/redditList'

const RedditListPage = () => {
  return (
    <div>
      <Button variant="contained">Contained</Button>
      <RedditList />
    </div>
  )
}

export default RedditListPage
