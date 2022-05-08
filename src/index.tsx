import React from 'react';
import {createRoot} from'react-dom/client'
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import {Store} from './controllers/store/Store'

const root = createRoot(
  document.getElementById('root')!
);

root.render(
  <BrowserRouter>
    <Provider store={Store}>
    <App />
    </Provider>
  </BrowserRouter>
)
