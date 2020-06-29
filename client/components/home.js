import React, { useEffect } from 'react'
import { Route, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Head from './head'
import Profile from './repo-list'
import Readme from './readme'
import Header from './header'
import { repoList, user, readme } from '../redux/reducers/data'

const Home = () => {
  const dispatch = useDispatch()
  const { userName, repositoryName } = useParams()
  useEffect(() => {
    if (typeof repositoryName !== 'undefined') {
      dispatch(readme(userName, repositoryName))
    }
  }, [dispatch, repositoryName, userName])

  useEffect(() => {
    dispatch(repoList(userName))
    dispatch(user(userName))
  }, [dispatch, userName])
  return (
    <div>
      <Header repositoryName={repositoryName} userName={userName} />
      <Route
        exact
        path="/:userName"
        component={() => <Profile repoList={repoList} userName={userName} />}
      />
      <Route exact path="/:userName/:repositoryName" component={() => <Readme />} />
      <Head title="GITHUB APP" />
    </div>
  )
}

Home.propTypes = {}

export default Home
