export const fetchRepos = async userName => {
  const response = await fetch(`https://api.github.com/users/${userName}/repos`)
  return response.json()
}

export const fetchCommits = async (userName, repoName) => {
  const response = await fetch(
    `https://api.github.com/repos/${userName}/${repoName}/commits`
  )
  return response.json()
}
