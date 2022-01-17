import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AuthContext } from './hooks/useAuth';
import Router from './routes/Router';
import { store } from './store';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContext>
        <Router />
      </AuthContext>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
