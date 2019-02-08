import React from 'react'
import ReactDOM from 'react-dom'
import GamesContainer from '../../container/gamesContainer'
import { Provider } from 'react-redux'
import reducers from '../../reducers'
import ReduxPromise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux'
import renderer from 'react-test-renderer'

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
// describe('tests Games Container component', () => {
//   it('matches Games Container snapshot', () => {
//     const tree = renderer
//       .create(
//         <Provider store={createStoreWithMiddleware(reducers)}>
//           <GamesContainer />
//         </Provider>
//       )
//       .toJSON()
//     expect(tree).toMatchSnapshot()
//   })
// })
