import './index.css';

import { configureStore } from '@reduxjs/toolkit';
import { throttle } from 'lodash-es'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App/App';
// import { configureStore } from './configureStore';
import * as serviceWorker from './serviceWorker';
import { todosReducer } from './todos/reducers';
import { usersReducer } from './users/reducers';

const reducer = {
  todos: todosReducer,
  users: usersReducer,
};

let preloadedState;
const reduxStateLS = localStorage.getItem('redux-state');

if (reduxStateLS) {
  try {
    preloadedState = JSON.parse(reduxStateLS);
  }
  catch {}
}

console.log(process.env.REACT_APP_MY_VAR);

const store = configureStore({ reducer, preloadedState, devTools: process.env.NODE_ENV === 'development' });

store.subscribe(throttle(() => {
  localStorage.setItem('redux-state', JSON.stringify(store.getState()));
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
