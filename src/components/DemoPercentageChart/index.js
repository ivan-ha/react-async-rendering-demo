import PropTypes from 'prop-types'
import React from 'react'
import { Area, AreaChart, XAxis, YAxis } from 'recharts'

import { CHART_MARGIN, CHART_SIZE, COLORS } from '../../constants'

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
      stroke={COLORS[6]}
      fill={COLORS[6]}
    />
    <Area
      type="monotone"
      dataKey="y"
      stackId="1"
      stroke={COLORS[7]}
      fill={COLORS[7]}
    />
    <Area
      type="monotone"
      dataKey="z"
      stackId="1"
      stroke={COLORS[8]}
      fill={COLORS[8]}
    />
  </AreaChart>
)

DemoPercentageChart.propTypes = {
  data: PropTypes.array.isRequired,
}

export default DemoPercentageChart
