import PropTypes from 'prop-types'
import React from 'react'

import { COLORS } from '../../constants'
import Spinner from '../Spinner'
import * as styles from './styles'

const ListItem = ({ value, onClick, index, isLoading, isRainbow }) => {
  return (
    <div
      onClick={onClick}
      style={{
        ...styles.container,
        backgroundColor: isRainbow ? COLORS[index % COLORS.length] : COLORS[6],
      }}
    >
      {value}
      {isLoading && <Spinner size="small" />}
    </div>
  )
}

ListItem.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  index: PropTypes.number.isRequired,
  isLoading: PropTypes.bool,
  isRainbow: PropTypes.bool,
}

export default ListItem
