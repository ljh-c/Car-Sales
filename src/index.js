import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './reducers/reducer';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(rootReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  rootElement
);