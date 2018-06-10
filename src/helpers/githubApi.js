import { USER_NAME } from '../constants'

export const fetchRepos = async () => {
  const response = await fetch(
    `https://api.github.com/users/${USER_NAME}/repos`
  )
  return response.json()
}

export const fetchCommits = async repoName => {
  const response = await fetch(
    `https://api.github.com/repos/${USER_NAME}/${repoName}/commits`
  )
  return response.json()
}
