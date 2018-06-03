import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Input from './components/Input'

class App extends Component {
  state = {
    inputValue: '',
  }

  handleChange = evt => {
    this.setState({ inputValue: evt.target.value })

    // ReactDOM.unstable_deferredUpdates(() => {
    //   this.setState({ inputValue: evt.target.value })
    // })
  }

  render() {
    return <Input value={this.state.inputValue} onChange={this.handleChange} />
  }
}
export default App
