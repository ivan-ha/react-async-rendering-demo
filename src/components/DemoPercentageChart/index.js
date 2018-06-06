import PropTypes from 'prop-types'
import React from 'react'
import { Area, AreaChart, XAxis, YAxis } from 'recharts'

import { COLORS } from '../../constants'

const DemoPercentageChart = ({ data }) => (
  <AreaChart
    width={400}
    height={400}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
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
