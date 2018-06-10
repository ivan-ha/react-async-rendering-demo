import React, { Component } from 'react'

import Spinner from '../../components/Spinner'
import { USER_NAME } from '../../constants'
import { Placeholder } from '../../helpers/future'
import RepoListing from './RepoListing'

class Suspense extends Component {
  state = {
    currentRepoId: null,
  }

  handleRepoClick = currentRepoId => this.setState({ currentRepoId })

  handleBackClick = () => this.setState({ currentRepoId: null })

  render() {
    return (
      <Placeholder fallback={<Spinner size="large" />} delayMs={1000}>
        {this.state.currentRepoId && (
          <div onClick={this.handleBackClick}>BACK</div>
        )}
        {!this.state.currentRepoId ? (
          <RepoListing userName={USER_NAME} onClick={this.handleRepoClick} />
        ) : (
          <p>WIP</p>
        )}
      </Placeholder>
    )
  }
}

export default Suspense
