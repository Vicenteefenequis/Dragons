import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from './routes/Router';
import { store } from './store';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
