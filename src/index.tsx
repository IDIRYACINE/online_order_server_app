import React from 'react';
import ReactDOM from 'react-dom';
import './ui/style/index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import {Store} from './redux/Store'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={Store}>
    <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById('root')
);
