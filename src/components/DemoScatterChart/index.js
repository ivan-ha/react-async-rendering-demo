import PropTypes from 'prop-types'
import React from 'react'
import { Cell, Scatter, ScatterChart, XAxis, YAxis } from 'recharts'

import { CHART_MARGIN, CHART_SIZE, COLORS } from '../../constants'

const DemoScatterChart = ({ data }) => (
  <ScatterChart width={CHART_SIZE} height={CHART_SIZE} margin={CHART_MARGIN}>
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
