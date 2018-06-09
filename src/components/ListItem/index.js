import PropTypes from 'prop-types'
import React from 'react'

import * as styles from './styles'

const ListItem = ({ value, onClick }) => {
  return (
    <div onClick={onClick} style={styles.container}>
      {value}
    </div>
  )
}

ListItem.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ListItem
