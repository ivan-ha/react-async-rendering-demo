import PropTypes from 'prop-types'
import React from 'react'
import { Cell, Scatter, ScatterChart, XAxis, YAxis } from 'recharts'

import { COLORS } from '../../constants'

const DemoScatterChart = ({ data }) => (
  <ScatterChart
    width={400}
    height={400}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
  >
    <XAxis dataKey={'x'} type="number" tick={false} />
    <YAxis dataKey={'y'} type="number" />
    <Scatter data={data}>
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Scatter>
  </ScatterChart>
)

DemoScatterChart.propTypes = {
  data: PropTypes.array.isRequired,
}

export default DemoScatterChart
