import React, { Fragment } from 'react'

import DemoBarChart from '../../components/DemoBarChart'
import DemoPercentageChart from '../../components/DemoPercentageChart'
import DemoScatterChart from '../../components/DemoScatterChart'
import Input from '../../components/Input'
import Tab from '../../components/Tab'
import { DATA_FACTOR } from '../../constants'
import { Component } from '../../helpers/future'
import { genListData } from '../../helpers/generateData'

const INITIAL_DATA = genListData(DATA_FACTOR)

const chartStyles = { display: 'flex' }

class TimeSlicing extends Component {
  state = {
    inputValue: '',
    data: INITIAL_DATA,
    isAsync: true,
  }

  handleChange = evt => {
    const value = evt.target.value
    const newDataSet = {
      data: genListData(DATA_FACTOR * (value.length || 1)),
    }

    this.setState({ inputValue: value })

    this.state.isAsync
      ? this.deferSetState(newDataSet)
      : this.setState(newDataSet)
  }

  handleTabChange = isAsync =>
    this.setState({
      isAsync,
      inputValue: '',
      data: INITIAL_DATA,
    })

  render() {
    return (
      <Fragment>
        <Tab
          isOn={this.state.isAsync}
          onClick={this.handleTabChange}
          leftValue={'Async Mode'}
          rightValue={'Sync Mode'}
        />
        <Input value={this.state.inputValue} onChange={this.handleChange} />

        <div style={chartStyles}>
          <DemoScatterChart data={this.state.data} />
          <DemoPercentageChart data={this.state.data} />
          <DemoBarChart data={this.state.data} />
        </div>
      </Fragment>
    )
  }
}

export default TimeSlicing
