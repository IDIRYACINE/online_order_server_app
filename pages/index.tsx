import React from 'react';
import App from './_app';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import {Store} from 'utils/store/Store'
import type { NextPage } from 'next'

const IndexPage: NextPage = () => {
  return (
  <BrowserRouter>
    <Provider store={Store}>
    <App />
    </Provider>
  </BrowserRouter>
  )
}

export default IndexPage
