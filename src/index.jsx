// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// import cities from '../cities';
// import citiesReducer from './reducers/cities_reducer';

// State and reducers
// const reducers = combineReducers({
//   // redux state tree
//   cities: citiesReducer
// });

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
