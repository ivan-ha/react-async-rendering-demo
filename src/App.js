import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import DemoScatterChart from './components/DemoScatterChart'
import Input from './components/Input'
import Tab from './components/Tab'
import { DATA_FACTOR } from './constants'
import { Component } from './helpers/future'
import { genListData } from './helpers/generateData'

const INITIAL_DATA = genListData(DATA_FACTOR)

class App extends Component {
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
        <Tab isAsync={this.state.isAsync} onClick={this.handleTabChange} />
        <Input value={this.state.inputValue} onChange={this.handleChange} />
        <DemoScatterChart data={this.state.data} />
      </Fragment>
    )
  }
}
export default App
