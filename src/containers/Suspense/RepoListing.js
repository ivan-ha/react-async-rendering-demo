import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ListItem from '../../components/ListItem'
import { createFetcher } from '../../helpers/future'
import { fetchRepos } from '../../helpers/githubApi'

const reposFetcher = createFetcher(fetchRepos)

const RepoListing = ({ loadingRepoName, onClick }) => {
  const repos = reposFetcher.read()

  return (
    <Fragment>
      {repos.map((repo, index) => (
        <ListItem
          key={repo.id}
          value={repo.name}
          onClick={() => onClick(repo.name)}
          index={index}
          isLoading={repo.name === loadingRepoName}
          isRainbow
        />
      ))}
    </Fragment>
  )
}

RepoListing.propTypes = {
  loadingRepoName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default RepoListing
