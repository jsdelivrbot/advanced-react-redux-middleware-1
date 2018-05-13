import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import async from './middleware/async';

import './styles.css';

import App from './components/App';

const createStoreWithMiddleware = applyMiddleware(async)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <App />
  </Provider>,
  document.getElementById('root')
);
