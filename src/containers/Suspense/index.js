import React, { Component } from 'react'

import Spinner from '../../components/Spinner'
import { USER_NAME } from '../../constants'
import { Placeholder } from '../../helpers/future'
import RepoListing from './RepoListing'

class Suspense extends Component {
  render() {
    return (
      <Placeholder fallback={<Spinner size="large" />} delayMs={1000}>
        <RepoListing userName={USER_NAME} />
      </Placeholder>
    )
  }
}

export default Suspense
