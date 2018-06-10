import React from 'react'

import Spinner from '../../components/Spinner'
import { COLORS } from '../../constants'
import { Component, Placeholder } from '../../helpers/future'
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
    showCommitListing: false,
  }

  handleRepoClick = currentRepoName => {
    this.setState({ currentRepoName })
    this.deferSetState({ showCommitListing: true })
  }

  handleBackClick = () => {
    this.setState({
      currentRepoName: null,
      showCommitListing: false,
    })
  }

  render() {
    return (
      <Placeholder fallback={<Spinner size="large" />} delayMs={1000}>
        {this.state.showCommitListing && (
          <div style={backButtonStyles} onClick={this.handleBackClick}>
            👈 Back
          </div>
        )}
        {!this.state.showCommitListing ? (
          <RepoListing
            loadingRepoName={this.state.currentRepoName}
            onClick={this.handleRepoClick}
          />
        ) : (
          <CommitListingLoader repoName={this.state.currentRepoName} />
        )}
      </Placeholder>
    )
  }
}

export default Suspense
