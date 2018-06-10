import PropTypes from 'prop-types'
import React from 'react'

import { COLORS } from '../../constants'
import * as styles from './styles'

const ListItem = ({ value, onClick, index }) => {
  return (
    <div
      onClick={onClick}
      style={{
        ...styles.container,
        backgroundColor: COLORS[index % COLORS.length],
      }}
    >
      {value}
    </div>
  )
}

ListItem.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
}

export default ListItem
