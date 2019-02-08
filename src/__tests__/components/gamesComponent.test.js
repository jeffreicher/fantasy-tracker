import React from 'react'
import renderer from 'react-test-renderer'
import GamesComponent from '../../components/gamesComponent'

describe('Games Component test', () => {
  it('checks if Games Component matches snapshot', () => {
    const tree = renderer.create(<GamesComponent />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
