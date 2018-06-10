import PropTypes from 'prop-types'
import * as R from 'ramda'
import React, { Fragment } from 'react'

import ListItem from '../../components/ListItem'
import { createFetcher } from '../../helpers/future'
import { fetchCommits } from '../../helpers/githubApi'

const commitFetcher = createFetcher(fetchCommits)

const CommitListing = ({ repoName }) => {
  const commits = commitFetcher.read(repoName)

  return (
    <Fragment>
      <h1>{repoName}</h1>
      {commits.map((commit, index) => (
        <ListItem
          key={commit.sha}
          value={`${R.take(7, commit.sha)} ${commit.commit.message}`}
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
