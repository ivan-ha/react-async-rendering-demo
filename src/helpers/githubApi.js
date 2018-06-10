import * as R from 'ramda'

import { GITHUB_USER_NAME } from '../constants'
import { getValueFromQS } from './getValueFromQS'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const latency = R.compose(
  parseInt,
  R.defaultTo(0),
  getValueFromQS
)('latency')

export const fetchRepos = async () => {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USER_NAME}/repos`
  )

  // Simulate some delay
  await sleep(latency)

  return response.json()
}

export const fetchCommits = async repoName => {
  const response = await fetch(
    `https://api.github.com/repos/${GITHUB_USER_NAME}/${repoName}/commits`
  )

  // Simulate some delay
  await sleep(latency)

  return response.json()
}
