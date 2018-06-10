import { GITHUB_USER_NAME } from '../constants'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const fetchRepos = async () => {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USER_NAME}/repos`
  )

  // Simulate long delay
  await sleep(3000)

  return response.json()
}

export const fetchCommits = async repoName => {
  const response = await fetch(
    `https://api.github.com/repos/${GITHUB_USER_NAME}/${repoName}/commits`
  )

  // Simulate long delay
  await sleep(3000)

  return response.json()
}
