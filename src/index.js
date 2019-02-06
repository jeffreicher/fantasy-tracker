import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'
import './assets/css/index.css'
import App from './components/App'
import registerServiceWorker from './helpers/registerServiceWorker'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import scoreContainer from './container/scoreContainer'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Switch>
          <Route path="/" component={App} />
          <Route path="/scoreboard" component={scoreContainer} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
