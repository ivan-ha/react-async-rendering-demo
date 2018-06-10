import React, { Component } from 'react'

import Spinner from '../../components/Spinner'
import { COLORS, USER_NAME } from '../../constants'
import { Placeholder } from '../../helpers/future'
import CommitListing from './CommitListing'
import RepoListing from './RepoListing'

const backButtonStyles = {
  fontSize: 30,
  backgroundColor: COLORS[0],
  borderRadius: 4,
  color: 'black',
  textAlign: 'center',
  width: 150,
}

class Suspense extends Component {
  state = {
    currentRepoName: null,
  }

  handleRepoClick = currentRepoName => this.setState({ currentRepoName })

  handleBackClick = () => this.setState({ currentRepoName: null })

  render() {
    return (
      <Placeholder fallback={<Spinner size="large" />} delayMs={1000}>
        {this.state.currentRepoName && (
          <div style={backButtonStyles} onClick={this.handleBackClick}>
            👈 Back
          </div>
        )}
        {!this.state.currentRepoName ? (
          <RepoListing onClick={this.handleRepoClick} />
        ) : (
          <CommitListing repoName={this.state.currentRepoName} />
        )}
      </Placeholder>
    )
  }
}

export default Suspense
