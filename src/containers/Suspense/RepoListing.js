import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ListItem from '../../components/ListItem'
import { createFetcher } from '../../helpers/future'
import { fetchRepos } from '../../helpers/githubApi'

const reposFetcher = createFetcher(fetchRepos)

const RepoListing = ({ userName, onClick }) => {
  const repos = reposFetcher.read(userName)

  return (
    <Fragment>
      {repos.map((repo, index) => (
        <ListItem
          key={repo.id}
          value={repo.name}
          onClick={() => onClick(repo.id)}
          index={index}
        />
      ))}
    </Fragment>
  )
}

RepoListing.propTypes = {
  userName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default RepoListing
