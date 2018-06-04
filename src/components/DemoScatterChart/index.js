import PropTypes from 'prop-types'
import React from 'react'
import { CartesianGrid, Scatter, ScatterChart, XAxis, YAxis } from 'recharts'

const DemoScatterChart = ({ data }) => (
  <ScatterChart
    width={400}
    height={400}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
  >
    <CartesianGrid />
    <XAxis dataKey={'x'} />
    <YAxis dataKey={'y'} />
    <Scatter name="A school" data={data} fill="#8884d8" />
  </ScatterChart>
)

DemoScatterChart.propTypes = {
  data: PropTypes.array.isRequired,
}

export default DemoScatterChart
