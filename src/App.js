import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import DemoScatterChart from './components/DemoScatterChart'
import Input from './components/Input'
import { DATA_FACTOR } from './constants'
import { Component } from './helpers/future'
import { genListData } from './helpers/generateData'

class App extends Component {
  state = {
    inputValue: '',
    data: genListData(DATA_FACTOR),
  }

  handleChange = evt => {
    const value = evt.target.value

    this.setState({ inputValue: value })

    this.setState({
      data: genListData(DATA_FACTOR * (value.length || 1)),
    })
  }

  render() {
    return (
      <Fragment>
        <Input value={this.state.inputValue} onChange={this.handleChange} />
        <DemoScatterChart data={this.state.data} />
      </Fragment>
    )
  }
}
export default App
