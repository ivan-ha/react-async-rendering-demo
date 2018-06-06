import PropTypes from 'prop-types'
import React from 'react'

import * as styles from './styles'

const Input = ({ value, onChange }) => (
  <div style={styles.containerStyle}>
    <input
      style={styles.inputStyle}
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Input text to update the charts"
    />
  </div>
)

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Input
