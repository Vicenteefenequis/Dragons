import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/Router';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
);
