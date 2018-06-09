import React, { Component } from 'react'

import { REPO_NAME, USER_NAME } from '../../constants'
import { fetchCommits, fetchRepos } from '../../helpers/githubApi'

class Suspense extends Component {
  componentDidMount() {
    fetchRepos(USER_NAME)
    fetchCommits(USER_NAME, REPO_NAME)
  }

  render() {
    return <div>Suspense demo WIP</div>
  }
}

export default Suspense
