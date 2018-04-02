import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
  counter: 0
}

const CounterReducer = (state = initialState, action) => {
  //reducer is a Pure function
  switch(action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        counter: state.counter - 1
      }
    case 'SET_NUMBER':
      return {
        counter: action.number
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
