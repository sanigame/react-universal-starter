import React from 'react'

import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const PageContainer = ({ title, description, children }) => {
  const meta = {
    ogTitle: title,
    ogDescription: description,
  }
  return (
    <>
      <Helmet
        title={title}
        meta={[
          { property: 'og:title', content: meta.ogTitle },
          { property: 'og:description', content: meta.ogDescription },
        ]}
      />
      {children}
    </>
  )
}

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

PageContainer.defaultProps = {
  title: 'Site title',
  description: 'Site detail',
}

export default PageContainer
