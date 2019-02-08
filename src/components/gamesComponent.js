import React, { Component } from 'react'
import '../assets/css/gamesComponent.css'
// import Scoreboard from './gameScoreboard';

class GamesComponent extends Component {
  render() {
    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear()
    today = `${month} / ${day} / ${year}`
    return (
      <div className="container gamesContainer">
        <div className="dateContainer">
          <button type="button" className="btn btn-primary">
            Previous
          </button>
          <div>{today}</div>
          <button type="button" className="btn btn-primary">
            Next
          </button>
        </div>
        {/* <Scoreboard /> */}
      </div>
    )
  }
}

export default GamesComponent
