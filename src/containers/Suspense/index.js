import React, { Component } from 'react'

import Spinner from '../../components/Spinner'
import { COLORS } from '../../constants'
import { Placeholder } from '../../helpers/future'
import { createFetcher } from '../../helpers/future'
import RepoListing from './RepoListing'

const backButtonStyles = {
  fontSize: 30,
  backgroundColor: COLORS[0],
  borderRadius: 4,
  color: 'black',
  textAlign: 'center',
  width: 150,
}

const commitListingFetcher = createFetcher(() => import('./CommitListing'))
const CommitListingLoader = props => {
  const CommitListing = commitListingFetcher.read().default
  return <CommitListing {...props} />
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
          <CommitListingLoader repoName={this.state.currentRepoName} />
        )}
      </Placeholder>
    )
  }
}

export default Suspense
