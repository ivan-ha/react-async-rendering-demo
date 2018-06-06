import PropTypes from 'prop-types'
import React from 'react'
import { Bar, BarChart, XAxis, YAxis } from 'recharts'

import { CHART_SIZE } from '../../constants'

const DemoBarChart = ({ data }) => (
  <BarChart
    width={CHART_SIZE}
    height={CHART_SIZE}
    data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
  >
    <XAxis dataKey="index" tick={false} />
    <YAxis />
    <Bar dataKey="x" fill="#8884d8" />
    <Bar dataKey="y" fill="#82ca9d" />
  </BarChart>
)

DemoBarChart.propTypes = {
  data: PropTypes.array.isRequired,
}

export default DemoBarChart
