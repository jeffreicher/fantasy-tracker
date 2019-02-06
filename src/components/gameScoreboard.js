import React, { Component } from 'react'
import { retrieveGames } from '../libs/gamesToday'
class Scoreboard extends Component {
  async componentDidMount() {
    console.log(await retrieveGames())
  }
  render() {
    return <div>scoreboard</div>
  }
}

export default Scoreboard
