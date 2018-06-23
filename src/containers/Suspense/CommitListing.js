import PropTypes from 'prop-types'
import * as R from 'ramda'
import React, { Fragment } from 'react'

import ListItem from '../../components/ListItem'
import { createFetcher } from '../../helpers/future'
import { fetchCommits } from '../../helpers/githubApi'

/**
 * DEMO: 1. Create a commitFetcher
 */

const CommitListing = ({ repoName }) => {
  /**
   * DEMO: 2. Read from the commitFetcher
   */
  const commits = [
    {
      sha: 'abc1234',
      commit: { message: "Hello I'm Ivan" },
    },
    {
      sha: 'def5678',
      commit: { message: '#hk01 #react #react-native' },
    },
  ]

  return (
    <Fragment>
      <h1>{repoName}</h1>

      {commits.map((commit, index) => (
        <ListItem
          key={commit.sha}
          value={`[${R.take(7, commit.sha)}] ${commit.commit.message}`}
          index={index}
        />
      ))}
    </Fragment>
  )
}

CommitListing.propTypes = {
  repoName: PropTypes.string.isRequired,
}

export default CommitListing
