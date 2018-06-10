import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ListItem from '../../components/ListItem'
import { createFetcher } from '../../helpers/future'
import { fetchRepos } from '../../helpers/githubApi'

const reposFetcher = createFetcher(fetchRepos)

const RepoListing = ({ onClick }) => {
  const repos = reposFetcher.read()

  return (
    <Fragment>
      {repos.map((repo, index) => (
        <ListItem
          key={repo.id}
          value={repo.name}
          onClick={() => onClick(repo.name)}
          index={index}
          isRainbow
        />
      ))}
    </Fragment>
  )
}

RepoListing.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default RepoListing
