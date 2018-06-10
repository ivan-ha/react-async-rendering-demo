import PropTypes from 'prop-types'
import React from 'react'

import ListItem from '../../components/ListItem'
import { createFetcher } from '../../helpers/future'
import { fetchRepos } from '../../helpers/githubApi'

const reposFetcher = createFetcher(fetchRepos)

const RepoListing = ({ userName }) => {
  const repos = reposFetcher.read(userName)

  return (
    <div>
      {repos.map((repo, index) => (
        <ListItem
          key={repo.id}
          value={repo.name}
          onClick={() => {}}
          index={index}
        />
      ))}
    </div>
  )
}

RepoListing.propTypes = {
  userName: PropTypes.string.isRequired,
}

export default RepoListing
