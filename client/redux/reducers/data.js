import axios from 'axios'

const initialState = {
  repo: [],
  user: {},
  readme: ''
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'REPO_LIST':
      return { ...state, repo: [...state.repo, ...action.repo] }
    case 'AVATAR_LOGIN':
      return { ...state, user: { ...action.user } }
    case 'README':
      return { ...state, readme: action.readme }
    default:
      return state
  }
}

export function repoList(userName) {
  return (dispatch) => {
    axios(`https://api.github.com/users/${userName}/repos`).then(({ data }) => {
      return dispatch({ type: 'REPO_LIST', repo: data })
    })
  }
}

export function user(userName) {
  return (dispatch) => {
    axios(`https://api.github.com/users/${userName}`).then(({ data }) => {
      dispatch({ type: 'AVATAR_LOGIN', user: data })
    })
  }
}

export function readme(userName, repositoryName) {
  return (dispatch) => {
    axios(
      `https://api.github.com/repos/${userName}/${repositoryName}/readme`,
      {
        headers: { Accept: 'application/vnd.github.VERSION.raw' }
      },
      []
    ).then(({ data }) => {
      dispatch({ type: 'README', readme: data })
    })
  }
}
