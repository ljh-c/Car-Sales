import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import rootReducer from './reducers/reducer';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(rootReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  rootElement
);