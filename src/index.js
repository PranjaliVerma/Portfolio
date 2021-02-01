import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { createStore, applyMiddleware, compose} from 'redux';
import {Provider } from 'react-redux';
import allReducer from './reducers';
import displayUsers from "./actions/displayData.js"
import thunk from "redux-thunk"
 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(
  allReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

store.dispatch(displayUsers())

ReactDOM.render(
    <Provider store ={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);


