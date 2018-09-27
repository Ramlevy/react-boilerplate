import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase.js';
import LoadingPage from './components/LoadingPage.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'))
    hasRendered = true;
  }
};


ReactDOM.render(<LoadingPage />, document.getElementById('app'))

// runs on Authenticated to unAuthenticated or the opposite
firebase.auth().onAuthStateChanged((user) => {
  if (user) { // Login
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  }
  else { // Logout
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

