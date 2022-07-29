import React from 'react'
import Layout from './components/layout/Layout'
import NoSearch from './components/no-search'
import Profile from './components/Profile/Profile'
import Repositories from './components/reposistories'
import useGithub from './hooks/github-hooks'


const App = () => {
  const { githubState } = useGithub()
  return (
    <Layout>
      {githubState.hasUser ?
        <>
          {githubState.loading ? (
            <>
              <p>Loading...</p>
            </>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </> :
        <NoSearch />}

    </Layout>
  )
}

export default App