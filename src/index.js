import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'
import ReduxPromise from 'redux-promise'
import './assets/css/index.css'
import App from './components/app'
import registerServiceWorker from './helpers/registerServiceWorker'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
