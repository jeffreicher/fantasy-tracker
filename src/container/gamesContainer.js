import React, { Component } from 'react'
import { connect } from 'react-redux'
import GamesComponent from '../components/gamesComponent'
import { retrieveGames } from '../actions'

class GamesContainer extends Component {
  renderGames() {
    return this.props.games.map(game => {
      //convert UTC time received from nba.js to local start time of game
      let startTime = new Date(game.startTimeUTC).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
      return (
        <GamesComponent key={game.gameId} game={game} startTime={startTime} />
      )
    })
  }

  render() {
    return <div>{this.renderGames()};</div>
  }
}

const mapStateToProps = state => {
  return {
    games: state.gamesData.games
  }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         gameData: () => dispatch(retrieveGames())
//     }
// }

export default connect(mapStateToProps)(GamesContainer)
