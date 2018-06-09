import React, { Component } from 'react'

import { REPO_NAME, USER_NAME } from '../../constants'
import { createFetcher } from '../../helpers/future'
import { fetchCommits, fetchRepos } from '../../helpers/githubApi'

const reposFetcher = createFetcher(fetchRepos)

class Suspense extends Component {
  render() {
    const repos = reposFetcher.read(USER_NAME)
    console.log(repos)
    return <div>Suspense demo WIP</div>
  }
}

export default Suspense
