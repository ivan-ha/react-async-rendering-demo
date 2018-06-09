import './styles.css'

import PropTypes from 'prop-types'
import React from 'react'

const Spinner = ({ size }) => <div className={`spinner spinner-${size}`} />

Spinner.propTypes = {
  size: PropTypes.string.isRequired,
}

Spinner.defaultProps = {
  size: 'medium',
}

export default Spinner
