import PropTypes from 'prop-types'
import React from 'react'

import { inputStyle } from './styles'

const Input = ({ value, onChange }) => (
  <input style={inputStyle} type="text" value={value} onChange={onChange} />
)

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Input
