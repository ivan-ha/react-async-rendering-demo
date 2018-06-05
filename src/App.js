import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import DemoScatterChart from './components/DemoScatterChart'
import Input from './components/Input'
import { Component } from './future'
import { genListData } from './helpers/generateData'

class App extends Component {
  state = {
    inputValue: '',
    data: genListData(10),
  }

  handleChange = evt => {
    const value = evt.target.value

    this.setState({ inputValue: value })

    this.deferSetState({
      data: genListData(10 * (value.length || 1)),
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
