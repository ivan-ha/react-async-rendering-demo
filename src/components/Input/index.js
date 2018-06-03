import PropTypes from 'prop-types'
import React from 'react'

const Input = ({ value, onChange }) => (
  <input type="text" value={value} onChange={onChange} />
)

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Input
