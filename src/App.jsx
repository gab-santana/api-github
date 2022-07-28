import React from 'react'
import Layout from './components/layout/Layout'
import Profile from './components/Profile/Profile'
import { GlobalStyle } from './global/global'
import GithubProvider from './providers/github-provider'
import Repositories from './components/reposistories'



const App = () => {
  return (
    <main>
      <GithubProvider>
        <GlobalStyle />
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GithubProvider>
    </main>


  )
}

export default App