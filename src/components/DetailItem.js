import React from 'react'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const DetailItem = ({ title, name }) => {
  return (
    <li>
      <Link to={`/detail/${name}`}>{title}</Link>
    </li>
  )
}

DetailItem.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
}

DetailItem.defaultProps = {
  title: '',
  name: '#',
}

export default DetailItem
