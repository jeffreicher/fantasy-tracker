import React from 'react'
import renderer from 'react-test-renderer'
import Navbar from '../../components/navbar'
describe('Navbar component test', () => {
  it('checks if Navbar component matches snapshot', () => {
    const tree = renderer.create(<Navbar />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
