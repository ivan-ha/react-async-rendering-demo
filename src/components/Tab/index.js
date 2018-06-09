import PropTypes from 'prop-types'
import React from 'react'

import * as style from './styles'

const Tab = ({ isOn, leftValue, onClick, rightValue }) => (
  <ul style={style.tab}>
    <li
      style={Object.assign({}, style.content, isOn ? style.active : null)}
      onClick={() => onClick(true)}
    >
      {leftValue}
    </li>
    <li
      style={Object.assign({}, style.content, !isOn ? style.active : null)}
      onClick={() => onClick(false)}
    >
      {rightValue}
    </li>
  </ul>
)

Tab.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  leftValue: PropTypes.string.isRequired,
  rightValue: PropTypes.string.isRequired,
}

export default Tab
