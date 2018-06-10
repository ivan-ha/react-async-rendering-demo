import PropTypes from 'prop-types'
import React from 'react'

import { COLORS } from '../../constants'
import * as styles from './styles'

const ListItem = ({ value, onClick, index, isRainbow }) => {
  return (
    <div
      onClick={onClick}
      style={{
        ...styles.container,
        backgroundColor: isRainbow ? COLORS[index % COLORS.length] : COLORS[6],
      }}
    >
      {value}
    </div>
  )
}

ListItem.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  index: PropTypes.number.isRequired,
  isRainbow: PropTypes.bool,
}

export default ListItem
