import * as R from 'ramda'
import React, { Fragment } from 'react'

import DemoScatterChart from './components/DemoScatterChart'
import Input from './components/Input'
import { Component } from './future'

const getRandomNumber = () => Math.floor(Math.random() * 500 + 1)
const getRandomData = () => ({
  x: getRandomNumber(),
  y: getRandomNumber(),
})

class App extends Component {
  state = {
    inputValue: '',
    data: [],
  }

  handleChange = evt => {
    const value = evt.target.value

    this.setState({ inputValue: value })

    this.deferSetState(({ data }) => ({
      data: R.append(getRandomData(), data),
    }))
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
