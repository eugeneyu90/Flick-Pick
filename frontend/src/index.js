import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
  watchlist: [],
  watchedlist: [],

}

const CounterReducer = (state = initialState, action) => {
  //reducer is a Pure function
  switch(action.type) {
    case 'ADD_TO_WATCHLIST':
      return {
        watchlist: state.watchlist.concat(action.movie)
      }
    case 'REMOVE_FROM_WATCHLIST':
      return {
        watchlist: state.watchlist.filter(!action.movie)
      }
    case 'ADD_TO_WATCHEDLIST':
      return {
        watchedlist: state.watchlist.concat(action.movie)
      }
    case 'REMOVE_FROM_WATCHEDLIST':
      return {
        watchlist: state.watchlist.filter(!action.movie)
      }
    default:
      return state
  }
}

const store = createStore(CounterReducer)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
