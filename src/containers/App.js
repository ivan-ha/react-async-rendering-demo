import React, { Component, Fragment } from 'react'

import Tab from '../components/Tab'
import Suspense from './Suspense'
import TimeSlicing from './TimeSlicing'

class App extends Component {
  state = {
    isTimeSlicing: true,
  }

  handleTabChange = isTimeSlicing => this.setState({ isTimeSlicing })

  renderMainApp = () =>
    this.state.isTimeSlicing ? <TimeSlicing /> : <Suspense />

  render() {
    return (
      <Fragment>
        <Tab
          isOn={this.state.isTimeSlicing}
          onClick={this.handleTabChange}
          leftValue={'Time Slicing Demo'}
          rightValue={'Suspense Demo'}
        />
        {this.renderMainApp()}
      </Fragment>
    )
  }
}
export default App
