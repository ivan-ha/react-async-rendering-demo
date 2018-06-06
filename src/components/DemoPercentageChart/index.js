import PropTypes from 'prop-types'
import React from 'react'
import { Area, AreaChart, XAxis, YAxis } from 'recharts'

import { CHART_MARGIN, CHART_SIZE } from '../../constants'

const DemoPercentageChart = ({ data }) => (
  <AreaChart
    width={CHART_SIZE}
    height={CHART_SIZE}
    margin={CHART_MARGIN}
    data={data}
  >
    <XAxis dataKey={'index'} type="number" tick={false} />
    <YAxis />

    <Area
      type="monotone"
      dataKey="x"
      stackId="1"
      stroke="#8884d8"
      fill="#8884d8"
    />
    <Area
      type="monotone"
      dataKey="y"
      stackId="1"
      stroke="#82ca9d"
      fill="#82ca9d"
    />
    <Area
      type="monotone"
      dataKey="z"
      stackId="1"
      stroke="#ffc658"
      fill="#ffc658"
    />
  </AreaChart>
)

DemoPercentageChart.propTypes = {
  data: PropTypes.array.isRequired,
}

export default DemoPercentageChart
