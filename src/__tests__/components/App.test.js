import React from 'react'
import ReactDOM from 'react-dom'
import App from '../../components/App'
import { Provider } from 'react-redux'
import reducers from '../../reducers'
import ReduxPromise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux'
import renderer from 'react-test-renderer'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
describe('tests App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
      </Provider>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('matches snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={createStoreWithMiddleware(reducers)}>
          <App />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
