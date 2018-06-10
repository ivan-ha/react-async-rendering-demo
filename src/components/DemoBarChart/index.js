import PropTypes from 'prop-types'
import React from 'react'
import { Bar, BarChart, XAxis, YAxis } from 'recharts'

import { CHART_MARGIN, CHART_SIZE, COLORS } from '../../constants'

const DemoBarChart = ({ data }) => (
  <BarChart
    width={CHART_SIZE}
    height={CHART_SIZE}
    data={data}
    margin={CHART_MARGIN}
  >
    <XAxis dataKey="index" tick={false} />
    <YAxis />
    <Bar dataKey="x" fill={COLORS[6]} />
    <Bar dataKey="y" fill={COLORS[7]} />
  </BarChart>
)

DemoBarChart.propTypes = {
  data: PropTypes.array.isRequired,
}

export default DemoBarChart
