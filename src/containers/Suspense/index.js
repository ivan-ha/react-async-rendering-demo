import React, { Component } from 'react'

import { USER_NAME } from '../../constants'
import RepoListing from './RepoListing'

class Suspense extends Component {
  render() {
    return <RepoListing userName={USER_NAME} />
  }
}

export default Suspense
