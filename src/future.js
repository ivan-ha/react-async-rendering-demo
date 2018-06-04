import * as R from 'ramda'
import React from 'react'
import ReactDOM from 'react-dom'

export class Component extends React.Component {
  deferSetState(updater, callback) {
    // ReactDOM.unstable_deferredUpdates not working in event handlers issue workaround
    // https://twitter.com/dan_abramov/status/971090711893377026
    Promise.resolve(() =>
      ReactDOM.unstable_deferredUpdates(() => {
        if (R.type(updater) === 'Object') {
          this.setState(() => ({ ...updater }), callback)
        } else if (R.type(updater) === 'Function') {
          this.setState(updater, callback)
        } else {
          throw new Error('Unsupported argument')
        }
      })
    ).then(deferredUpdates => deferredUpdates())
  }
}
