import React from 'react';
import { GlobalStyle } from './global/global';
import GithubProvider from './providers/github-provider';
import App from './App';

const Providers = () => {
  return (
    <main>

      <GithubProvider>
        <GlobalStyle />
        <App />
      </GithubProvider>
    </main>
  )
}

export default Providers