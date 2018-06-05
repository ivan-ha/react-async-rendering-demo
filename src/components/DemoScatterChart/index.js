import PropTypes from 'prop-types'
import React from 'react'
import { Cell, Scatter, ScatterChart, XAxis, YAxis } from 'recharts'

const colors = [
  '#EF5350',
  '#FFA726',
  '#FFEE58',
  '#66BB6A',
  '#29B6F6',
  '#AB47BC',
]

const DemoScatterChart = ({ data }) => (
  <ScatterChart
    width={400}
    height={400}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
  >
    <XAxis dataKey={'x'} type="number" tick={false} />
    <YAxis dataKey={'y'} type="number" tick={false} />
    <Scatter data={data} fill="#8884d8">
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
      ))}
    </Scatter>
  </ScatterChart>
)

DemoScatterChart.propTypes = {
  data: PropTypes.array.isRequired,
}

export default DemoScatterChart
