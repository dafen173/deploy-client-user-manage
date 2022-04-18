import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
//import { useDispatch } from 'react-redux'

import './index.css'
import App from './component/App'
import reportWebVitals from './reportWebVitals'
import rootReducer from './reducers'
import initialState from './store/initialState'
//import { getUsers } from './action/getUsers'
//import { getGroups } from './action/getGroups'
//import {store} from "./reducers/userReducer"

/* const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)) */

// const store = createStore(rootReducer, initialState, compose(
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ))

const store = createStore(
  rootReducer, 
  initialState, 
  composeWithDevTools(applyMiddleware(thunk))
);

//store.dispatch(getUsers())
//store.dispatch(getGroups())

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
