import React from 'react'
import ReactDOM from 'react-dom'
import ScoreContainer from '../../container/scoreContainer'
import { Provider } from 'react-redux'
import reducers from '../../reducers'
import ReduxPromise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux'
import renderer from 'react-test-renderer'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
describe('tests Score Container component', () => {
  it('matches Score Container snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={createStoreWithMiddleware(reducers)}>
          <ScoreContainer />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
