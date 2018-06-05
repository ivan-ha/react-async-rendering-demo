import React from 'react'

import * as style from './styles'

const Tab = ({ isAsync, onClick }) => (
  <ul style={style.tab}>
    <li
      style={Object.assign({}, style.content, isAsync ? style.active : null)}
      onClick={() => onClick(true)}
    >
      Async mode
    </li>
    <li
      style={Object.assign({}, style.content, !isAsync ? style.active : null)}
      onClick={() => onClick(false)}
    >
      Sync mode
    </li>
  </ul>
)

export default Tab
